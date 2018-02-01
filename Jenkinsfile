#!groovy

pipeline {
  agent none
  stages {
    stage('Docker Build') {
      agent any
      steps {
        sh 'docker build -t yogeshvar/gyanhub:latest .'
      }
    }
    stage('Docker Push') {
      agent any
      steps {
        withCredentials([usernamePassword(credentialsId: 'yogeshvar', passwordVariable: 'SonaliJain15#', usernameVariable: 'yogeshvar')]) {
          sh "docker login -u yogeshvar -p SonaliJain15#"
          sh 'docker push yogeshvar/gyanhub:latest'
        }
      }
    }
  }
}