[@pashoo2/typescript-npm-package-boilerplate](../README.md) / [Exports](../modules.md) / IRejectable

# Interface: IRejectable<E\>

## Type parameters

| Name | Type |
| :------ | :------ |
| `E` | extends [`MaybeError`](../modules.md#maybeerror) |

## Hierarchy

- **`IRejectable`**

  ↳ [`IPromiseRejectable`](ipromiserejectable.md)

  ↳ [`ICustomPromiseDescription`](icustompromisedescription.md)

## Table of contents

### Properties

- [reject](irejectable.md#reject)

## Properties

### reject

• **reject**: (`err`: `E`) => `unknown`

#### Type declaration

▸ (`err`): `unknown`

##### Parameters

| Name | Type |
| :------ | :------ |
| `err` | `E` |

##### Returns

`unknown`

#### Defined in

src/types.ts:18
