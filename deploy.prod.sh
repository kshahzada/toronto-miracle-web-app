( aws cloudformation package --template-file "./cloudformation.client.yaml" --s3-bucket kshahzada-deploy-bucket --output-template-file "./cloudformation.packaged.yaml" && \
aws cloudformation deploy --stack-name "prod-toronto-miracle-web-app" --template-file "./cloudformation.packaged.yaml" --capabilities CAPABILITY_NAMED_IAM --parameter-overrides ClientBucketName="app.torontomiracle.org" ClientDomainName="app.torontomiracle.org" APIDomainName="api.torontomiracle.org" && \
rm ./cloudformation.packaged.yaml ) && \
( ( aws s3 sync ./build s3://app.torontomiracle.org ) ; cd ../ ) ; \
aws cloudfront create-invalidation \
    --distribution-id E3OU4LC8DP8U1I \
    --paths "/*" ;
# Probably should add cache invalidation somehow... might need to be a python script
