[@pashoo2/typescript-npm-package-boilerplate](../README.md) / [Exports](../modules.md) / IPromiseCancellable

# Interface: IPromiseCancellable<T, E\>

Promise which can be cancelled from outside
of it.

**`export`**

**`interface`** IPromiseCancellable

## Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `E` | extends `Error``Error` |

## Hierarchy

- `Promise`<`T` \| `E`\>

  ↳ **`IPromiseCancellable`**

## Table of contents

### Properties

- [[toStringTag]](ipromisecancellable.md#[tostringtag])

### Methods

- [cancel](ipromisecancellable.md#cancel)
- [catch](ipromisecancellable.md#catch)
- [finally](ipromisecancellable.md#finally)
- [then](ipromisecancellable.md#then)

## Properties

### [toStringTag]

• `Readonly` **[toStringTag]**: `string`

#### Inherited from

Promise.\_\_@toStringTag@24

#### Defined in

node_modules/typescript/lib/lib.es2015.symbol.wellknown.d.ts:174

## Methods

### cancel

▸ **cancel**(`error?`): `void`

Cancels the promise with error provided
or a default error.

**`memberof`** IPromiseCancellable

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `error?` | `E` | error with which the promise will be resolved |

#### Returns

`void`

#### Defined in

src/types.ts:70

___

### catch

▸ **catch**<`TResult`\>(`onrejected?`): `Promise`<`T` \| `E` \| `TResult`\>

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

`Promise`<`T` \| `E` \| `TResult`\>

A Promise for the completion of the callback.

#### Inherited from

Promise.catch

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1460

___

### finally

▸ **finally**(`onfinally?`): `Promise`<`T` \| `E`\>

Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
resolved value cannot be modified from the callback.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `onfinally?` | ``null`` \| () => `void` | The callback to execute when the Promise is settled (fulfilled or rejected). |

#### Returns

`Promise`<`T` \| `E`\>

A Promise for the completion of the callback.

#### Inherited from

Promise.finally

#### Defined in

node_modules/typescript/lib/lib.es2018.promise.d.ts:31

___

### then

▸ **then**<`TResult1`, `TResult2`\>(`onfulfilled?`, `onrejected?`): `Promise`<`TResult1` \| `TResult2`\>

Attaches callbacks for the resolution and/or rejection of the Promise.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TResult1` | `T` \| `E` |
| `TResult2` | `never` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `onfulfilled?` | ``null`` \| (`value`: `T` \| `E`) => `TResult1` \| `PromiseLike`<`TResult1`\> | The callback to execute when the Promise is resolved. |
| `onrejected?` | ``null`` \| (`reason`: `any`) => `TResult2` \| `PromiseLike`<`TResult2`\> | The callback to execute when the Promise is rejected. |

#### Returns

`Promise`<`TResult1` \| `TResult2`\>

A Promise for the completion of which ever callback is executed.

#### Inherited from

Promise.then

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1453
