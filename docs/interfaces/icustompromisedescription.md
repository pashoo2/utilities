[@pashoo2/typescript-npm-package-boilerplate](../README.md) / [Exports](../modules.md) / ICustomPromiseDescription

# Interface: ICustomPromiseDescription<T, E\>

## Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `E` | extends [`MaybeError`](../modules.md#maybeerror) |

## Hierarchy

- [`IRejectable`](irejectable.md)<`E`\>

- [`IResolvable`](iresolvable.md)<`T`\>

  ↳ **`ICustomPromiseDescription`**

## Table of contents

### Properties

- [promise](icustompromisedescription.md#promise)
- [reject](icustompromisedescription.md#reject)
- [resolve](icustompromisedescription.md#resolve)

## Properties

### promise

• **promise**: `Promise`<`T`\>

#### Defined in

src/types.ts:34

___

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

#### Inherited from

[IRejectable](irejectable.md).[reject](irejectable.md#reject)

#### Defined in

src/types.ts:18

___

### resolve

• **resolve**: (`value`: `T`) => `unknown`

#### Type declaration

▸ (`value`): `unknown`

##### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `T` |

##### Returns

`unknown`

#### Inherited from

[IResolvable](iresolvable.md).[resolve](iresolvable.md#resolve)

#### Defined in

src/types.ts:14
