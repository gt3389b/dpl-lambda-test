# Deploying an AWS Lambda function with 'dpl' and Travis-CI

## Configure your Travis build

Define:

```
   AWS_ACCESS_KEY_ID
   AWS_SECRET_ACCESS_KEY
```

## Test your function
```
aws lambda invoke --function-name test_function_4 --log-type Tail --payload '{"key1":"test1"}' outfile
```
