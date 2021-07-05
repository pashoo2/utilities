[@pashoo2/typescript-npm-package-boilerplate](README.md) / Exports

# @pashoo2/typescript-npm-package-boilerplate

## Table of contents

### Interfaces

- [ICustomPromiseCreator](interfaces/icustompromisecreator.md)
- [ICustomPromiseDescription](interfaces/icustompromisedescription.md)
- [IPromiseCancellable](interfaces/ipromisecancellable.md)
- [IPromisePending](interfaces/ipromisepending.md)
- [IPromisePendingRejectable](interfaces/ipromisependingrejectable.md)
- [IPromisePendingRejectableCreator](interfaces/ipromisependingrejectablecreator.md)
- [IPromiseRejectable](interfaces/ipromiserejectable.md)
- [IRejectable](interfaces/irejectable.md)
- [IResolvable](interfaces/iresolvable.md)

### Type aliases

- [ConstructorType](modules.md#constructortype)
- [MaybeError](modules.md#maybeerror)
- [PromiseResolveType](modules.md#promiseresolvetype)
- [TDictionary](modules.md#tdictionary)
- [TObjectKeys](modules.md#tobjectkeys)
- [TSimpleTypes](modules.md#tsimpletypes)

### Functions

- [bytesInInteger](modules.md#bytesininteger)
- [checkIsError](modules.md#checkiserror)
- [cloneMap](modules.md#clonemap)
- [commonUtilsAreAllArraysEqualOrNotDefined](modules.md#commonutilsareallarraysequalornotdefined)
- [commonUtilsArrayCalculateLengthOfIntegerArray](modules.md#commonutilsarraycalculatelengthofintegerarray)
- [commonUtilsArrayDefinedOnly](modules.md#commonutilsarraydefinedonly)
- [commonUtilsArrayDeleteFromArray](modules.md#commonutilsarraydeletefromarray)
- [commonUtilsArrayDoCallbackTillNoError](modules.md#commonutilsarraydocallbacktillnoerror)
- [commonUtilsArrayIncludesAll](modules.md#commonutilsarrayincludesall)
- [commonUtilsArrayOrderByDec](modules.md#commonutilsarrayorderbydec)
- [commonUtilsArrayOrderByDecComparationFunction](modules.md#commonutilsarrayorderbydeccomparationfunction)
- [commonUtilsArrayUniq](modules.md#commonutilsarrayuniq)
- [commonUtilsIsArray](modules.md#commonutilsisarray)
- [commonUtilsReturnArrayIfTwoArraysEquals](modules.md#commonutilsreturnarrayiftwoarraysequals)
- [commonUtilsReturnArrayIfTwoArraysEqualsOrNotDefinedAndReturnArrayIfEquals](modules.md#commonutilsreturnarrayiftwoarraysequalsornotdefinedandreturnarrayifequals)
- [concatSets](modules.md#concatsets)
- [createCancellablePromiseByNativePromise](modules.md#createcancellablepromisebynativepromise)
- [createCustomPromise](modules.md#createcustompromise)
- [createFunctionFromSerializedFunction](modules.md#createfunctionfromserializedfunction)
- [createPromisePending](modules.md#createpromisepending)
- [createPromisePendingRejectable](modules.md#createpromisependingrejectable)
- [createRejectablePromiseByNativePromise](modules.md#createrejectablepromisebynativepromise)
- [deepCloneObject](modules.md#deepcloneobject)
- [delay](modules.md#delay)
- [extend](modules.md#extend)
- [filterMapKeys](modules.md#filtermapkeys)
- [getItemsCount](modules.md#getitemscount)
- [getObjectKeys](modules.md#getobjectkeys)
- [getPowTen](modules.md#getpowten)
- [isArraysSwallowEqual](modules.md#isarraysswallowequal)
- [isArraysUnsortedDeepEqual](modules.md#isarraysunsorteddeepequal)
- [isArraysUnsortedSwallowEqual](modules.md#isarraysunsortedswallowequal)
- [isArrowFunction](modules.md#isarrowfunction)
- [isArrowFunctionStringified](modules.md#isarrowfunctionstringified)
- [isDeepEqual](modules.md#isdeepequal)
- [isDefined](modules.md#isdefined)
- [isEmptyObject](modules.md#isemptyobject)
- [isEqualFunctions](modules.md#isequalfunctions)
- [isNativeFunction](modules.md#isnativefunction)
- [isNonArrowFunctionStringified](modules.md#isnonarrowfunctionstringified)
- [isNonNativeFunction](modules.md#isnonnativefunction)
- [isNotEmptyObject](modules.md#isnotemptyobject)
- [isObjectsDeepEqual](modules.md#isobjectsdeepequal)
- [isObjectsSwallowEquals](modules.md#isobjectsswallowequals)
- [isSimpleObject](modules.md#issimpleobject)
- [isSimpleTypeValue](modules.md#issimpletypevalue)
- [isSimpleTypesObject](modules.md#issimpletypesobject)
- [mergeMaps](modules.md#mergemaps)
- [resolvePromisePending](modules.md#resolvepromisepending)
- [round](modules.md#round)
- [timeout](modules.md#timeout)
- [waitFor](modules.md#waitfor)
- [whetherTwoMapsSimilar](modules.md#whethertwomapssimilar)
- [whetherValuesNotShallowSimilar](modules.md#whethervaluesnotshallowsimilar)
- [whetherValuesSimilar](modules.md#whethervaluessimilar)

## Type aliases

### ConstructorType

Ƭ **ConstructorType**<`R`, `A`\>: (...`args`: `A`) => `R`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `R` | `R` |
| `A` | extends `any`[]`any`[] |

#### Type declaration

• (...`args`)

##### Parameters

| Name | Type |
| :------ | :------ |
| `...args` | `A` |

#### Defined in

src/types.ts:7

___

### MaybeError

Ƭ **MaybeError**: `Error` \| `void`

#### Defined in

src/types.ts:11

___

### PromiseResolveType

Ƭ **PromiseResolveType**<`P`\>: `P` extends `Promise`<infer T\> ? `T` : `never`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `P` | extends `Promise`<`unknown`\> |

#### Defined in

src/types.ts:45

___

### TDictionary

Ƭ **TDictionary**<`T`\>: `Record`<[`TObjectKeys`](modules.md#tobjectkeys), `T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Defined in

src/types.ts:5

___

### TObjectKeys

Ƭ **TObjectKeys**: `string` \| `number` \| `symbol`

#### Defined in

src/types.ts:1

___

### TSimpleTypes

Ƭ **TSimpleTypes**: `number` \| `string` \| `boolean` \| ``null`` \| `undefined`

#### Defined in

src/types.ts:3

## Functions

### bytesInInteger

▸ **bytesInInteger**(`num`): `number` \| `Error`

Returns how many bytes in the
number

**`export`**

#### Parameters

| Name | Type |
| :------ | :------ |
| `num` | `number` |

#### Returns

`number` \| `Error`

#### Defined in

src/common-utils-number.ts:9

___

### checkIsError

▸ `Const` **checkIsError**(`v`): v is Error

Whether a value is an error.

#### Parameters

| Name | Type |
| :------ | :------ |
| `v` | `unknown` |

#### Returns

v is Error

#### Defined in

src/common-utils-check-value.ts:7

___

### cloneMap

▸ **cloneMap**<`T`\>(`map`): `T`

Clones readonly Map or normal map
into normal map.

**`export`**

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `Map`<`unknown`, `unknown`, `T`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `map` | `Readonly`<`T`\> \| `T` |

#### Returns

`T`

#### Defined in

src/common-utils-maps.ts:57

___

### commonUtilsAreAllArraysEqualOrNotDefined

▸ `Const` **commonUtilsAreAllArraysEqualOrNotDefined**(...`arrays`): `boolean`

Checks whether all arrays has the same items in the same order
or undefined or null.

#### Parameters

| Name | Type |
| :------ | :------ |
| `...arrays` | `unknown`[][] |

#### Returns

`boolean`

#### Defined in

src/common-utils-array.ts:98

___

### commonUtilsArrayCalculateLengthOfIntegerArray

▸ `Const` **commonUtilsArrayCalculateLengthOfIntegerArray**(`arr`, `maxNumber?`, `minNumber?`): `number` \| `Error`

calculate the overall lenght
of the numeric array in bytes

#### Parameters

| Name | Type |
| :------ | :------ |
| `arr` | `number`[] |
| `maxNumber?` | `number` |
| `minNumber?` | `number` |

#### Returns

`number` \| `Error`

- return a length of the array or an Error
if a non-finite or an unsafe number will be met

#### Defined in

src/common-utils-array.ts:178

___

### commonUtilsArrayDefinedOnly

▸ `Const` **commonUtilsArrayDefinedOnly**<`T`\>(`arr`): `NonNullable`<`T`\>[]

Returns only defined items of an array

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `arr` | `T`[] |

#### Returns

`NonNullable`<`T`\>[]

#### Defined in

src/common-utils-array.ts:255

___

### commonUtilsArrayDeleteFromArray

▸ `Const` **commonUtilsArrayDeleteFromArray**<`T`\>(`arr`, `item`): `void`

delete an item from the array

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `arr` | `T`[] |
| `item` | `T` |

#### Returns

`void`

#### Defined in

src/common-utils-array.ts:132

___

### commonUtilsArrayDoCallbackTillNoError

▸ `Const` **commonUtilsArrayDoCallbackTillNoError**<`T`\>(`arr`, `cb`): `void` \| `Error`

call a callback function for an each item in the
array till the result is not an intstance of the
Error. If any callback resulted with an Error
then the execution will break.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `arr` | `T`[] |
| `cb` | (`v`: `T`) => `any` |

#### Returns

`void` \| `Error`

#### Defined in

src/common-utils-array.ts:148

___

### commonUtilsArrayIncludesAll

▸ `Const` **commonUtilsArrayIncludesAll**(`testedArray`, `requiredItems`): `boolean`

check wherether the array
includes all items

#### Parameters

| Name | Type |
| :------ | :------ |
| `testedArray` | `any`[] |
| `requiredItems` | `any`[] |

#### Returns

`boolean`

#### Defined in

src/common-utils-array.ts:232

___

### commonUtilsArrayOrderByDec

▸ `Const` **commonUtilsArrayOrderByDec**<`T`\>(`arr`): `T`[]

sort array by decreasing
value on increased index

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `arr` | `T`[] |

#### Returns

`T`[]

#### Defined in

src/common-utils-array.ts:123

___

### commonUtilsArrayOrderByDecComparationFunction

▸ `Const` **commonUtilsArrayOrderByDecComparationFunction**<`T`\>(`a`, `b`): `number`

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | `T` |
| `b` | `T` |

#### Returns

`number`

#### Defined in

src/common-utils-array.ts:113

___

### commonUtilsArrayUniq

▸ `Const` **commonUtilsArrayUniq**<`T`\>(`arr`): `T`[]

Returns uniq items of an array

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `arr` | `T`[] |

#### Returns

`T`[]

#### Defined in

src/common-utils-array.ts:265

___

### commonUtilsIsArray

▸ `Const` **commonUtilsIsArray**(`a`): a is unknown[]

Whether a value is an array or not.

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | `unknown` |

#### Returns

a is unknown[]

#### Defined in

src/common-utils-array.ts:10

___

### commonUtilsReturnArrayIfTwoArraysEquals

▸ `Const` **commonUtilsReturnArrayIfTwoArraysEquals**(`firstArray`, `secondArray`): `boolean`

Checks whether two items are arrays and the two array items are equal and all items in the same order and return the second
one if equals.
Returns the second array if two arrays are equal or returns false otherwise.

**`template`**

**`template`**

#### Parameters

| Name | Type |
| :------ | :------ |
| `firstArray` | `any` |
| `secondArray` | `any` |

#### Returns

`boolean`

#### Defined in

src/common-utils-array.ts:60

___

### commonUtilsReturnArrayIfTwoArraysEqualsOrNotDefinedAndReturnArrayIfEquals

▸ `Const` **commonUtilsReturnArrayIfTwoArraysEqualsOrNotDefinedAndReturnArrayIfEquals**<`S`\>(`firstArray`, `secondArray`): `S` extends `unknown`[] ? `S` : ``false``

.

**`template`**

#### Type parameters

| Name |
| :------ |
| `S` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `firstArray` | `unknown` |
| `secondArray` | `S` |

#### Returns

`S` extends `unknown`[] ? `S` : ``false``

#### Defined in

src/common-utils-array.ts:77

___

### concatSets

▸ `Const` **concatSets**<`T`\>(...`sets`): `Set`<`T`\>

Concat multiple sets into a new one and returns the resulted Set

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `...sets` | (`undefined` \| `Set`<`T`\>)[] |

#### Returns

`Set`<`T`\>

#### Defined in

src/common-utils-sets.ts:10

___

### createCancellablePromiseByNativePromise

▸ **createCancellablePromiseByNativePromise**<`T`, `E`\>(`nativePromise`): [`IPromiseCancellable`](interfaces/ipromisecancellable.md)<`T`, `E`\>

By a native promise it creates a cancellable promise.

**`export`**

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `E` | extends `Error``Error` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `nativePromise` | `Promise`<`T`\> |

#### Returns

[`IPromiseCancellable`](interfaces/ipromisecancellable.md)<`T`, `E`\>

- promise which flow can be stopped

#### Defined in

src/common-utils.promises.ts:114

___

### createCustomPromise

▸ `Const` **createCustomPromise**<`T`, `E`\>(): [`ICustomPromiseDescription`](interfaces/icustompromisedescription.md)<`T`, `E`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `E` | extends [`MaybeError`](modules.md#maybeerror)`void` |

#### Returns

[`ICustomPromiseDescription`](interfaces/icustompromisedescription.md)<`T`, `E`\>

#### Defined in

src/common-utils.promises.ts:12

___

### createFunctionFromSerializedFunction

▸ **createFunctionFromSerializedFunction**(`functionSerialized`): (...`args`: `any`[]) => `any`

Create a function from a serialized function

**`export`**

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionSerialized` | `string` |

#### Returns

`fn`

▸ (...`args`): `any`

##### Parameters

| Name | Type |
| :------ | :------ |
| `...args` | `any`[] |

##### Returns

`any`

#### Defined in

src/common-utils.functions.ts:82

___

### createPromisePending

▸ `Const` **createPromisePending**<`T`, `E`\>(`promisePendingRejectableCreator?`): [`IPromisePending`](interfaces/ipromisepending.md)<`T`\>

Creates promise in the pending state
with a special resolve method

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `E` | extends [`MaybeError`](modules.md#maybeerror)`void` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `promisePendingRejectableCreator` | [`IPromisePendingRejectableCreator`](interfaces/ipromisependingrejectablecreator.md)<`T`, `E`\> |

#### Returns

[`IPromisePending`](interfaces/ipromisepending.md)<`T`\>

#### Defined in

src/common-utils.promises.ts:61

___

### createPromisePendingRejectable

▸ `Const` **createPromisePendingRejectable**<`T`, `E`\>(`customPromiseCreator?`): [`IPromisePendingRejectable`](interfaces/ipromisependingrejectable.md)<`T`, `E`\>

Create promise can be rejected or resolved from the outside

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `E` | extends [`MaybeError`](modules.md#maybeerror)`void` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `customPromiseCreator` | [`ICustomPromiseCreator`](interfaces/icustompromisecreator.md)<`T`, `E`\> |

#### Returns

[`IPromisePendingRejectable`](interfaces/ipromisependingrejectable.md)<`T`, `E`\>

#### Defined in

src/common-utils.promises.ts:43

___

### createRejectablePromiseByNativePromise

▸ **createRejectablePromiseByNativePromise**<`T`, `E`\>(`nativePromise`): [`IPromisePendingRejectable`](interfaces/ipromisependingrejectable.md)<`T`, `E`\>

By a native promise it creates a rejectable promise.

**`export`**

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `E` | extends [`MaybeError`](modules.md#maybeerror)`void` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `nativePromise` | `Promise`<`T`\> |

#### Returns

[`IPromisePendingRejectable`](interfaces/ipromisependingrejectable.md)<`T`, `E`\>

- promise which flow can be stopped

#### Defined in

src/common-utils.promises.ts:94

___

### deepCloneObject

▸ **deepCloneObject**<`T`\>(`value`): `T`

Compares objects by going deep into

**`export`**

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `Record`<`string`, `any`\> \| [`TSimpleTypes`](modules.md#tsimpletypes) \| (`Record`<`string`, `any`\> \| [`TSimpleTypes`](modules.md#tsimpletypes))[] |

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `T` |

#### Returns

`T`

#### Defined in

src/common-utils-objects.ts:142

___

### delay

▸ **delay**(`delayMs`): `Promise`<`void`\>

Returns a Promise that will resolve after a passed amount of milliseconds.

**`export`**

#### Parameters

| Name | Type |
| :------ | :------ |
| `delayMs` | `number` |

#### Returns

`Promise`<`void`\>

#### Defined in

src/common-utils-timer.ts:24

___

### extend

▸ **extend**<`T`, `E`\>(`o`, `ext`, `replaceExisting?`): `T` & `E`

extends object with another object if the object
have no properties

**`export`**

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`TDictionary`](modules.md#tdictionary)<`any`\> |
| `E` | extends [`TDictionary`](modules.md#tdictionary)<`any`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `o` | `T` \| `undefined` |
| `ext` | `E` |
| `replaceExisting?` | `boolean` |

#### Returns

`T` & `E`

#### Defined in

src/common-utils-objects.ts:68

___

### filterMapKeys

▸ **filterMapKeys**<`M`, `F`\>(`map`, `filterKeys`): `M`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `M` | extends `Map`<`any`, `any`, `M`\> |
| `F` | extends `any`[] |

#### Parameters

| Name | Type |
| :------ | :------ |
| `map` | `M` |
| `filterKeys` | `F` |

#### Returns

`M`

#### Defined in

src/common-utils-maps.ts:5

___

### getItemsCount

▸ `Const` **getItemsCount**<`T`\>(`arg`): `number`

Count of items

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `string` \| {} \| `any`[] \| `Map`<`any`, `any`\> \| `Set`<`any`\> \| `TTypedArrays` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `arg` | `T` | argument which is able to count it's items number |

#### Returns

`number`

- chars in string, bytes in typed arrays, keys in object, members in map, items in set, items in array

#### Defined in

src/common-utils-main.ts:20

___

### getObjectKeys

▸ `Const` **getObjectKeys**(`o`): [`TObjectKeys`](modules.md#tobjectkeys)[]

Returns keys of an object

#### Parameters

| Name | Type |
| :------ | :------ |
| `o` | `object` |

#### Returns

[`TObjectKeys`](modules.md#tobjectkeys)[]

#### Defined in

src/common-utils-objects.ts:30

___

### getPowTen

▸ `Const` **getPowTen**(`power`): `number`

Return ten to the power memoized
to reduce number of calculations.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `power` | `number` | power of 10 |

#### Returns

`number`

- Math.pow(10, power)

#### Defined in

src/common-utils-number.ts:31

___

### isArraysSwallowEqual

▸ `Const` **isArraysSwallowEqual**(`firstArray`, `secondArray`): `boolean`

Checks whether two arrays have the same items.
Order doesn't matter.

#### Parameters

| Name | Type |
| :------ | :------ |
| `firstArray` | `any`[] |
| `secondArray` | `any`[] |

#### Returns

`boolean`

#### Defined in

src/common-utils-array.ts:39

___

### isArraysUnsortedDeepEqual

▸ `Const` **isArraysUnsortedDeepEqual**<`T`\>(`array1`, `array2`): array1 is T

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `unknown`[] |

#### Parameters

| Name | Type |
| :------ | :------ |
| `array1` | `unknown`[] |
| `array2` | `T` |

#### Returns

array1 is T

#### Defined in

src/common-utils-equality.ts:87

___

### isArraysUnsortedSwallowEqual

▸ `Const` **isArraysUnsortedSwallowEqual**<`T`\>(`array1`, `array2`): array1 is T

Checks whether two array items are equal

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `unknown`[] |

#### Parameters

| Name | Type |
| :------ | :------ |
| `array1` | `unknown`[] |
| `array2` | `T` |

#### Returns

array1 is T

#### Defined in

src/common-utils-array.ts:21

___

### isArrowFunction

▸ **isArrowFunction**(`fn`): `boolean`

Is is an arrow function

**`export`**

#### Parameters

| Name | Type |
| :------ | :------ |
| `fn` | `Function` |

#### Returns

`boolean`

#### Defined in

src/common-utils.functions.ts:51

___

### isArrowFunctionStringified

▸ **isArrowFunctionStringified**(`valueStringified`): `boolean`

Is it an arrow function stringified

**`export`**

#### Parameters

| Name | Type |
| :------ | :------ |
| `valueStringified` | `string` |

#### Returns

`boolean`

#### Defined in

src/common-utils.functions.ts:23

___

### isDeepEqual

▸ **isDeepEqual**<`T`\>(`value1`, `value2`): value1 is T

Compares two values with deep equality if objects
and return true or false.
If one of the values is Symbol and they are not equal
return false.
Arrays are compared independently from the items order.
Functions serializable compared by it's string representation.

**`export`**

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `value1` | `unknown` |
| `value2` | `T` |

#### Returns

value1 is T

#### Defined in

src/common-utils-equality.ts:137

___

### isDefined

▸ `Const` **isDefined**<`T`\>(`v`): v is NonNullable<T\>

Returns whether value is not undefined, null or NaN

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `v` | `T` |

#### Returns

v is NonNullable<T\>

#### Defined in

src/common-utils-main.ts:10

___

### isEmptyObject

▸ `Const` **isEmptyObject**(`o`): `boolean`

Whether an object has any keys

#### Parameters

| Name | Type |
| :------ | :------ |
| `o` | `any` |

#### Returns

`boolean`

#### Defined in

src/common-utils-objects.ts:20

___

### isEqualFunctions

▸ **isEqualFunctions**(`fn1`, `fn2`): `boolean`

Checks whether functions bodies are equal.

**`export`**

#### Parameters

| Name | Type |
| :------ | :------ |
| `fn1` | `Function` |
| `fn2` | `Function` |

#### Returns

`boolean`

#### Defined in

src/common-utils.functions.ts:108

___

### isNativeFunction

▸ **isNativeFunction**(`f`): `boolean`

Is it a browser's built-in function.

**`export`**

#### Parameters

| Name | Type |
| :------ | :------ |
| `f` | `Function` |

#### Returns

`boolean`

#### Defined in

src/common-utils.functions.ts:34

___

### isNonArrowFunctionStringified

▸ **isNonArrowFunctionStringified**(`valueStringified`): `boolean`

Is it a non arrow function stringified

**`export`**

#### Parameters

| Name | Type |
| :------ | :------ |
| `valueStringified` | `string` |

#### Returns

`boolean`

#### Defined in

src/common-utils.functions.ts:8

___

### isNonNativeFunction

▸ **isNonNativeFunction**(`value`): value is function

Returns whether the argument is a non native function.

**`export`**

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `unknown` |

#### Returns

value is function

#### Defined in

src/common-utils.functions.ts:69

___

### isNotEmptyObject

▸ `Const` **isNotEmptyObject**(`o`): o is object

Whether an object doesn't have any keys

#### Parameters

| Name | Type |
| :------ | :------ |
| `o` | `any` |

#### Returns

o is object

#### Defined in

src/common-utils-objects.ts:10

___

### isObjectsDeepEqual

▸ **isObjectsDeepEqual**<`T`\>(`object1`, `object2`): object1 is T

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `Object` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `object1` | `unknown` |
| `object2` | `T` |

#### Returns

object1 is T

#### Defined in

src/common-utils-equality.ts:57

___

### isObjectsSwallowEquals

▸ `Const` **isObjectsSwallowEquals**<`T`\>(`simpleValuesObject1`, `simpleValuesObject2`): `boolean`

Whether two objects are equal without a deep comparison of values

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `simpleValuesObject1` | `any` |
| `simpleValuesObject2` | `T` |

#### Returns

`boolean`

#### Defined in

src/common-utils-objects.ts:110

___

### isSimpleObject

▸ `Const` **isSimpleObject**(`o`): o is Record<string, unknown\>

Is an object doesn't have a constructor

#### Parameters

| Name | Type |
| :------ | :------ |
| `o` | `unknown` |

#### Returns

o is Record<string, unknown\>

#### Defined in

src/common-utils-objects.ts:41

___

### isSimpleTypeValue

▸ `Const` **isSimpleTypeValue**(`v`): v is undefined \| null \| string \| number

#### Parameters

| Name | Type |
| :------ | :------ |
| `v` | `unknown` |

#### Returns

v is undefined \| null \| string \| number

#### Defined in

src/common-utils-main.ts:89

___

### isSimpleTypesObject

▸ `Const` **isSimpleTypesObject**(`o`): o is Record<string, unknown\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `o` | `unknown` |

#### Returns

o is Record<string, unknown\>

#### Defined in

src/common-utils-objects.ts:53

___

### mergeMaps

▸ **mergeMaps**<`M`\>(`mapTarget`, ...`maps`): `M`

Merge all maps into the target

**`export`**

#### Type parameters

| Name | Type |
| :------ | :------ |
| `M` | extends `Map`<`any`, `any`, `M`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `mapTarget` | `M` |
| `...maps` | `M`[] |

#### Returns

`M`

#### Defined in

src/common-utils-maps.ts:32

___

### resolvePromisePending

▸ `Const` **resolvePromisePending**<`T`\>(`promisePending`, `value`): `void`

Resolves promise pending with a value passed
in the arguments.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `promisePending` | [`IPromisePending`](interfaces/ipromisepending.md)<`T`\> |
| `value` | `T` |

#### Returns

`void`

#### Defined in

src/common-utils.promises.ts:78

___

### round

▸ `Const` **round**(`num`, `precision`): `number`

Round a number to a required precision.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `num` | `number` | a number to round |
| `precision` | `number` | count of digits after floating point |

#### Returns

`number`

- the number rounding to precision required

#### Defined in

src/common-utils-number.ts:42

___

### timeout

▸ **timeout**(`timeoutMs`, `error?`): `Promise`<`Error`\>

Returns a Promise which will throw after a certain amount of time passed.

**`export`**

#### Parameters

| Name | Type |
| :------ | :------ |
| `timeoutMs` | `number` |
| `error?` | `Error` |

#### Returns

`Promise`<`Error`\>

#### Defined in

src/common-utils-timer.ts:9

___

### waitFor

▸ `Const` **waitFor**<`R`\>(`cb`, `checkIntervalMs?`, `timeoutMs?`): `Promise`<`R`\>

Return a Promise which will be resolved
when the callback returns any value
which is defined(not null, ubdefined, NaN).

**`throw`** - rejects on timeout or if the callback thrown an error

#### Type parameters

| Name | Description |
| :------ | :------ |
| `R` | resolved type return by the callback function |

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `cb` | () => `undefined` \| `NonNullable`<`R`\> | `undefined` | callback function called each interval till not trow or return somethind |
| `checkIntervalMs` | `number` | `100` | - |
| `timeoutMs` | `number` | `360000` | - |

#### Returns

`Promise`<`R`\>

#### Defined in

src/common-utils-main.ts:51

___

### whetherTwoMapsSimilar

▸ **whetherTwoMapsSimilar**<`T`\>(`firstMap`, `secondMap`, `comparator?`): `boolean`

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `firstMap` | `Map`<`unknown`, `T`\> |
| `secondMap` | `Map`<`unknown`, `T`\> |
| `comparator?` | (`firstValue`: `T` \| `undefined`, `secondValue`: `T` \| `undefined`, `key`: `T` extends `Map`<infer K, `unknown`\> ? `K` : `never`) => `boolean` |

#### Returns

`boolean`

#### Defined in

src/common-utils-maps.ts:63

___

### whetherValuesNotShallowSimilar

▸ **whetherValuesNotShallowSimilar**(`firstValue`, `secondValue`): `boolean`

Fast comparison of two values for shallow similarity.
Returns false only for values which can't be decided
as same, e,g, {} !== 0, {} == {}, NaN == 0, Map({ a: undefined, b: undefined }) == Map()

**`export`**

#### Parameters

| Name | Type |
| :------ | :------ |
| `firstValue` | `unknown` |
| `secondValue` | `unknown` |

#### Returns

`boolean`

#### Defined in

src/common-utils-equality.ts:38

___

### whetherValuesSimilar

▸ **whetherValuesSimilar**(`firstValue`, `secondValue`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `firstValue` | `unknown` |
| `secondValue` | `unknown` |

#### Returns

`boolean`

#### Defined in

src/common-utils-equality.ts:13
