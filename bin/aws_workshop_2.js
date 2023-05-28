#!/usr/bin/env node

// const cdk = require('aws-cdk-lib');
const { AwsWorkshop2Stack } = require('../lib/aws_workshop_2-stack');

// const app = new cdk.App();
// new AwsWorkshop2Stack(app, 'AwsWorkshop2Stack', {
//   /* If you don't specify 'env', this stack will be environment-agnostic.
//    * Account/Region-dependent features and context lookups will not work,
//    * but a single synthesized template can be deployed anywhere. */

//   /* Uncomment the next line to specialize this stack for the AWS Account
//    * and Region that are implied by the current CLI configuration. */
//   // env: { account: process.env.CDK_DEFAULT_ACCOUNT, region: process.env.CDK_DEFAULT_REGION },

//   /* Uncomment the next line if you know exactly what Account and Region you
//    * want to deploy the stack to. */
//   // env: { account: '123456789012', region: 'us-east-1' },

//   /* For more information, see https://docs.aws.amazon.com/cdk/latest/guide/environments.html */
// });


const cdk = require('@aws-cdk/core');
const s3 = require('@aws-cdk/aws-s3');
const s3deploy = require('@aws-cdk/aws-s3-deployment');

const app = new cdk.App();
const stack = new cdk.Stack(app, "MyStaticSiteStack");

const websiteBucket = new s3.Bucket(stack, 'WebsiteBucket');

new s3deploy.BucketDeployment(stack, 'DeployWebsite', {
    sources: [s3deploy.Source.asset('assets')],
    destinationBucket: websiteBucket
});

app.synth();