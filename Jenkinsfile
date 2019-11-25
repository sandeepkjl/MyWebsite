pipeline {
    agent any



stages{
        
        stage('Build'){
            
            steps {
                bat 'ng build'              
            }
        }

        stage('copy artifact'){
            steps{
                bat 'xcopy .//dist//*WEB* D:/comericagit/HMIPlatformCEBase/Files/'
            }
        }
}
}