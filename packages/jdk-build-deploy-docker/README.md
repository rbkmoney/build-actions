# `jdk-build-deploy-docker` - **Github Action**

This action cache maven dependencies, add custom env variables, build maven project and deploy docker image

## Input

| Name               | Description                                                                                    |
| ------------------ | ---------------------------------------------------------------------------------------------- |
| `jdk-version`      | The JDK version to set up.                                                                     |
| `jdk-distribution` | JDK distributor.                                                                               |
| `mvn-args`         | Additional maven arguments                                                                     |
| `registry-username`| Username for image registry                                                                   |
| `registry-password`| Password for image registry                                                                   |

## Example Workflow File

```yaml
name: Build maven project and deploy docker image

on: [pull_request]

jobs:
    build-mvn:
        runs-on: ubuntu-latest
        steps:
          - name: Build And Deploy
            uses: rbkmoney/build-actions/packages/jdk-build-deploy-docker@v1.0.0
            with:
              mvn-args: '-DjvmArgs="-Xmx256m"'
```
