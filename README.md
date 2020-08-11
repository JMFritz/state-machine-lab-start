# Build a state machine lab (start)

## Deploy this stack using the AWS SAM CLI

Run the following commands in this project's root directory:

```bash
sam build
```
```bash
sam deploy --guided --profile <your-aws-profile>
```

### Initial deployment in guided interactive mode

In the guided interactive mode of `sam deploy` provide the following values:
```bash
Stack Name: state-machine-lab-start
AWS Region: us-west-2
Confirm changes before deploy [Y/n]: Y
Allow SAM CLI IAM role creation [Y/n]: Y
Save arguments to samconfig.toml [Y/n]: Y
```

## Subsequent deployments

With your deployment parameters saved in your `samconfig.toml` file, you can initiate all subsequent deployments with the following command:

```bash
sam build && sam deploy
```