# `dotenv` - **Github Action**

It reads the .env file from the root of this repo and provides environment variables to build steps.

## Input

| Name             | Description                                                                 |
| ---------------- | ----------------------------------------------------------------------------|
| `path`           | Override the path to the .env file. Default is .env in the repository root. |
| `log-variables`  | Log variables after reading from the .env file.                             |
| `mask-variables` | Mask values after reading from the .env file.                               |

## Output
| Name             | Description                                                                     |
| ---------------- | --------------------------------------------------------------------------------|
| `generic`        | Whatever is present in the .env file will be converted into an output variable. |


## Example Usage

E.g. you have the following .env:
```
VERSION=1.0
AUTHOR=Vitaxa
```
Then you will have outputs:
```
{
    version: "1.0"
    author: "v.banin"
}
```

Call action:
```
id: dotenv
uses: rbkmoney/build-actions/packages/dotenv@v1.0.0
```
Then you can refer to the env version like this ```${{ steps.dotenv.outputs.version }}```
