
resource "aws_sqs_queue" "my_queue" {
  name = "MySQSQueue"
  fifo_queue = false  # Standard-Warteschlange
}

resource "aws_lambda_function" "my_lambda" {
  function_name = "SQSLambdaFunction"
  handler = "index.handler"
  runtime = "nodejs18.x"
  role = aws_iam_role.my_lambda_role.arn

  filename = "${path.module}/lambda_code.zip"  # Lambda-Funktionsquelle anpassen
}

resource "aws_iam_role" "my_lambda_role" {
  name = "MyLambdaRole"

  assume_role_policy = jsonencode({
    Version = "2012-10-17",
    Statement = [{
      Action = "sts:AssumeRole",
      Effect = "Allow",
      Principal = {
        Service = "lambda.amazonaws.com"
      }
    }]
  })
}

resource "aws_iam_policy" "my_lambda_policy" {
  name        = "MyLambdaPolicy"
  description = "Policy for Lambda function to access SQS"

  policy = jsonencode({
    Version = "2012-10-17",
    Statement = [{
      Action   = "sqs:*",
      Effect   = "Allow",
      Resource = aws_sqs_queue.my_queue.arn
    }]
  })
}

resource "aws_iam_role_policy_attachment" "my_lambda_policy_attachment" {
  policy_arn = aws_iam_policy.my_lambda_policy.arn
  role       = aws_iam_role.my_lambda_role.name
}

resource "aws_lambda_event_source_mapping" "my_mapping" {
  batch_size    = 1
  event_source_arn = aws_sqs_queue.my_queue.arn
  function_name = aws_lambda_function.my_lambda.arn
  enabled      = true
}
