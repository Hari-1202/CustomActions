const core = require('@actions/core');
const github = require('@actions/github');
const exec = require('@actions/exec')

async function run() {
    core.info("Js actions")
    const bucketName = core.getInput('bucketName', {required: true})
    const bucketRegion = core.getInput('bucketRegion', {required: true})
    const file = core.getInput('file', {required: true})
    const s3uri = `s3://${bucketName}`
    console.log(`aws s3 sync ${file} ${s3uri} --region ${bucketRegion}`, "value")
    exec.exec(`aws s3 sync ${file} ${s3uri} --region ${bucketRegion}`)
    core.setOutput('website-url', 'http://hari-s3-js-actions.s3-website.ap-south-1.amazonaws.com/')
}

run()