resource "aws_iam_role" "lambda_role" {
 name   = "terraform_aws_lambda_role"
 assume_role_policy = <<EOF
{
    "Version": "2012-10-17",
    "Statement": [
        {
            "Effect": "Allow",
            "Principal": {
                "Service": "lambda.amazonaws.com"
            },
            "Action": "sts:AssumeRole"
        }
    ]
}
EOF
}

resource "aws_iam_policy" "iam_policy_for_dynamodb" {
  name        = "aws_iam_policy_for_dynamodb"
  description = "AWS IAM Policy for DynamoDB access"
  policy = jsonencode({
    Version = "2012-10-17",
    Statement = [
      {
        Action = "dynamodb:PutItem",
        Effect = "Allow",
        Resource = "arn:aws:dynamodb:eu-central-1:598990243446:table/Messages"
      }
    ]
  })
}

resource "aws_iam_role_policy_attachment" "attach_iam_policy_for_dynamodb" {
  policy_arn = aws_iam_policy.iam_policy_for_dynamodb.arn
  role       = aws_iam_role.lambda_role.name
}

