# Website monitoring using AWS

Basic instructions on how to use AWS for monitoring your websites. Note that I did not include instructions on creating the SNS topic, but check out the link in the Resources section for instructions on that one.

## Creating a monitoring function
1. Go to Lambda
2. Click on `Create Function` button
3. Select a function from a `lambda-canary` blueprint
4. Enter a name like `check_AzuriteMaps`
5. `Choose an existing role`, `service-role/lambda_canary_role`
3. Under the `Rule`, select the `one_minute` rule
4. Enable the trigger
4. Leave the function code as it is
5. Under the `site` enivornment variable, enter the URL of the site
6. Under the 'expected`enivornment variable, enter the expected text on that site
7. Click on the `Create Function` button

## Creating a new alarm

The following instructions will create an alarm that will run each minute and when it detects the website is down, it will send an email to the email address previously configured in the SNS topic `Websites_status_alarms`. It will only send this email once during the same failure (it will not repeat the emails after one minute). Once the website is up again, it will send a new email stating the alarm is now OK.

1. Go to CloudWatch
2. Click on the `Alarms` in the left  menu.
3. Click on the `Create Alarm` button.
4. In the `1. Select Metric` upper tab, in the `Browse Metric` combo box, select `Lambda` and then, under the `Lambda > By Function Name`, find appropriate function name (like `check_azuritemaps`) and choose `Errors` metric name.
5. Click on the `2. Define Alarm` tab at the top of the dialog.
6. `Name` should be something that easily identifies which website is down (like `AzuriteMaps is down`).
7. Set `Whenever` to `>= 1` (leave the default `for 1 out of 1 datapoints`).
8. Under `Actions` section, we will add two notifications (one for when the alarm is triggered and another for when the alarm is back to OK status):
    a. 'Whenever this alarm' should have `State is ALARM`.
    b. `Send notification to` should have `Websites_status_alarms` (a SNS topic which we previously configured to send email to our email address).
    c. Click on `+Notification` button and add another alarm, this time with `State is OK`
10. `Period` should be 1 minute.
11. `Statistic:` `Standard`, `Average`

Wait for one minute and then check the status of the alarm.

**To repeat the procedure for other websites, you can easily copy the existing alarm definition and just change the targeted lambda function and the name of the alarm.**

## Disabling a Lambda function
1. On the Lambda function editing page, click on the `CloudWatch Events` box to open the events editor.
1. A list of events (or just one event called `one_minute` in this case) will be shown below. Uncheck the `Enabled` checkbox to the right of the event.
1. `Save` the edited Lambda function. 

# Resources
- [Using AWS Lambda to check if your website is online](http://marcelog.github.io/articles/aws_lambda_check_website_http_online.html): this one describes writing the NodeJS lambda function, but I find the existing `lambda-canary` blueprint quite enough.
