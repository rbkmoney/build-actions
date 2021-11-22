# `jdk-setup` - **Github Action**

This action setup JDK and cache maven dependencies. This action useful when you where trying to avoid unnecessary loading of dependencies

## Input

| Name               | Description                                                                                    |
| ------------------ | ---------------------------------------------------------------------------------------------- |
| `jdk-version`      | The JDK version to set up.                                                                     |
| `jdk-distribution` | JDK distributor.                                                                               | |

## Output
| Name               | Description                                                                                    |
| ------------------ | ---------------------------------------------------------------------------------------------- |
| `cache-hit`        | An indication that cache has been loaded. Example to use: "if: steps.mvn-cache.outputs.cache-hit != 'true'"|

## Example Workflow File

```yaml
name: Setup Maven Project

on: [pull_request]

jobs:
    setup:
        runs-on: ubuntu-latest
        steps:
          - name: Setup
            uses: rbkmoney/build-actions/packages/jdk-setup@v1.0.0
```
