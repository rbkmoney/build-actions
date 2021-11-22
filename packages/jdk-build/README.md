# `jdk-build` - **Github Action**

This action cache maven dependencies, add custom env variables and build maven project

## Input

| Name               | Description                                                                                    |
| ------------------ | ---------------------------------------------------------------------------------------------- |
| `jdk-version`      | The JDK version to set up.                                                                     |
| `jdk-distribution` | JDK distributor.                                                                               |
| `mvn-args`         | Additional maven arguments                                                                     |

## Example Workflow File

```yaml
name: Build maven project

on: [pull_request]

jobs:
    build-mvn:
        runs-on: ubuntu-latest
        steps:
          - name: Build
            uses: rbkmoney/build-actions/packages/jdk-build@v1.0.0
            with:
              mvn-args: '-DjvmArgs="-Xmx256m"'
```
