
( aws cloudformation package --template-file "./cloudformation.client.yaml" --s3-bucket kshahzada-deploy-bucket --output-template-file "./cloudformation.packaged.yaml" && \
aws cloudformation deploy --stack-name "dev-toronto-miracle-web-app" --template-file "./cloudformation.packaged.yaml" --capabilities CAPABILITY_NAMED_IAM --parameter-overrides ClientBucketName="dev-app.torontomiracle.org" ClientDomainName="dev-app.torontomiracle.org" APIDomainName="dev-api.torontomiracle.org" && \
rm ./cloudformation.packaged.yaml ) && \
( ( aws s3 sync ./build s3://dev-app.torontomiracle.org ) ; ) ; \
aws cloudfront create-invalidation \
    --distribution-id E3LE87STNE5QJ7 \
    --paths "/*" ;
# Probably should add cache invalidation somehow... might need to be a python script
