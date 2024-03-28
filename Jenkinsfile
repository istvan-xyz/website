properties([
    buildDiscarder(
        logRotator(
            artifactDaysToKeepStr: '365',
            artifactNumToKeepStr: '1000',
            daysToKeepStr: '365',
            numToKeepStr: '1000'
    )),
    disableConcurrentBuilds(), pipelineTriggers([]
)])

def runCommand(String command) {
    return (sh(returnStdout: true, script: command)).trim()
}

def taggedVersion

node('docker') {
    docker.image('istvan32/builder:latest').inside {
        stage('checkout') {
            checkout([
                $class: 'GitSCM',
                branches: scm.branches,
                doGenerateSubmoduleConfigurations: scm.doGenerateSubmoduleConfigurations,
                extensions: [
                    [$class: 'LocalBranch', localBranch: env.BRANCH_NAME],
                    [$class: 'CloneOption', depth: 0, noTags: false, reference: '', shallow: false]
                ],
                userRemoteConfigs: scm.userRemoteConfigs
            ])
            taggedVersion = runCommand('git tag --contains HEAD')
            if (taggedVersion) {
                currentBuild.displayName = taggedVersion
            }
        }

        stage('npm install') {
            sh 'npm install'
        }

        stage('build') {
            sh 'npm run build'
        }

        stage('clean') {
            cleanWs()
        }
    }
}