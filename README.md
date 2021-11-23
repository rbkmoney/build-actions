# build-actions
Centralized repository for all GitHub Actions used in our CI/CD pipelines

## Example of use

An example of using actions in your repository. Create a github action file  ```./github/build.yml``` with the following content:
```yaml
name: Deploy Docker Image

on:
  push:
    branches:
      - 'master'

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - uses: rbkmoney/build-actions/packages/jdk-build@v1.0.0
      - uses: rbkmoney/build-actions/packages/deploy-docker@v1.0.0
        with:
          registry-username: ${{secrets.DOCKER_HUB_USERNAME}}
          registry-password: ${{secrets.DOCKER_HUB_ACCESS_TOKEN}}
```
This is how we get the project build and the docker image deploy.

## Complex actions
You can create actions by writing custom code that interacts with your repository in any way you'd like.

### Types of actions
You can build `Docker` container and `JavaScript` actions. Actions require a metadata file to define the inputs, outputs and main entrypoint for your action. The metadata filename must be either action.yml or action.yaml

An example of creating custom action [dotenv](./packages/dotenv) using `JavaScript`
