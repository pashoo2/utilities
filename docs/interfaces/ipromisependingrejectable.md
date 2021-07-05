[@pashoo2/typescript-npm-package-boilerplate](../README.md) / [Exports](../modules.md) / IPromisePendingRejectable

# Interface: IPromisePendingRejectable<T, E\>

## Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `E` | extends [`MaybeError`](../modules.md#maybeerror) |

## Hierarchy

- [`IPromisePending`](ipromisepending.md)<`T`\>

- [`IPromiseRejectable`](ipromiserejectable.md)<`T`, `E`\>

  ↳ **`IPromisePendingRejectable`**

## Table of contents

### Properties

- [[toStringTag]](ipromisependingrejectable.md#[tostringtag])
- [reject](ipromisependingrejectable.md#reject)
- [resolve](ipromisependingrejectable.md#resolve)

### Methods

- [catch](ipromisependingrejectable.md#catch)
- [finally](ipromisependingrejectable.md#finally)
- [then](ipromisependingrejectable.md#then)

## Properties

### [toStringTag]

• `Readonly` **[toStringTag]**: `string`

#### Inherited from

[IPromiseRejectable](ipromiserejectable.md).[[toStringTag]](ipromiserejectable.md#[tostringtag])

#### Defined in

node_modules/typescript/lib/lib.es2015.symbol.wellknown.d.ts:174

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

[IPromiseRejectable](ipromiserejectable.md).[reject](ipromiserejectable.md#reject)

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

[IPromisePending](ipromisepending.md).[resolve](ipromisepending.md#resolve)

#### Defined in

src/types.ts:14

## Methods

### catch

▸ **catch**<`TResult`\>(`onrejected?`): `Promise`<`T` \| `TResult`\>

Attaches a callback for only the rejection of the Promise.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TResult` | `never` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `onrejected?` | ``null`` \| (`reason`: `any`) => `TResult` \| `PromiseLike`<`TResult`\> | The callback to execute when the Promise is rejected. |

#### Returns

`Promise`<`T` \| `TResult`\>

A Promise for the completion of the callback.

#### Inherited from

[IPromiseRejectable](ipromiserejectable.md).[catch](ipromiserejectable.md#catch)

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1460

___

### finally

▸ **finally**(`onfinally?`): `Promise`<`T`\>

Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
resolved value cannot be modified from the callback.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `onfinally?` | ``null`` \| () => `void` | The callback to execute when the Promise is settled (fulfilled or rejected). |

#### Returns

`Promise`<`T`\>

A Promise for the completion of the callback.

#### Inherited from

[IPromiseRejectable](ipromiserejectable.md).[finally](ipromiserejectable.md#finally)

#### Defined in

node_modules/typescript/lib/lib.es2018.promise.d.ts:31

___

### then

▸ **then**<`TResult1`, `TResult2`\>(`onfulfilled?`, `onrejected?`): `Promise`<`TResult1` \| `TResult2`\>

Attaches callbacks for the resolution and/or rejection of the Promise.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TResult1` | `T` |
| `TResult2` | `never` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `onfulfilled?` | ``null`` \| (`value`: `T`) => `TResult1` \| `PromiseLike`<`TResult1`\> | The callback to execute when the Promise is resolved. |
| `onrejected?` | ``null`` \| (`reason`: `any`) => `TResult2` \| `PromiseLike`<`TResult2`\> | The callback to execute when the Promise is rejected. |

#### Returns

`Promise`<`TResult1` \| `TResult2`\>

A Promise for the completion of which ever callback is executed.

#### Inherited from

[IPromiseRejectable](ipromiserejectable.md).[then](ipromiserejectable.md#then)

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1453
