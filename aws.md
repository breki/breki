# Amazon Web Services - How To

## Email

### Set up e-mail forwarding from Amazon WorkMail to external email address
NOTE: First I tried redirecting, but it looks like GMail is refusing redirected emails.

1. Open WorkMail console with the email account credentials.
1. Click on the Settings button (in the top right corner).
1. Click on `Email rules` tab to the left.
1. Click on `New` button to add a new rule.
1. Define the `Rule name`.
1. Make sure `Active rule` checkbox is checked.
1. Define single condition: `has my name in the To box`.
1. Define two actions: `Forward the message to...` your GMail email address and `Delete the message`.
1. `Ok` the rule.
1. Click on `Save changes` button at the top of the rules list.
