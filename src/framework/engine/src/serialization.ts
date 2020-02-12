import {Serializable, PrettyPrintable} from './api';
import {Property} from '@diez/compiler-core';

const isSerializable = (value: any): value is Serializable<any> => value && value.serialize instanceof Function;
const isPrettyPrintable = (value: any): value is PrettyPrintable<any> => value && value.prettyValue instanceof Function;

const isPrimitive = (value: any) => value === null || typeof value !== 'object';

/**
 * An agnostic serializer for design token components, producing a stable and noncircular
 * representation of the data held in components.
 */
export const serialize = <T>(value: T): any => {
  if (isSerializable(value)) {
    // Important! We must recursively serialize any subcomponents below.
    return serialize(value.serialize());
  }

  if (isPrimitive(value)) {
    return value;
  }

  if (Array.isArray(value)) {
    return value.map(serialize);
  }

  const serialized: any = {};
  for (const key in value) {
    serialized[key] = serialize(value[key]);
  }
  return serialized;
};

export const prettyPrint = <T>(value: T, property?: Property): any => {
  if (isPrettyPrintable(value)) {
    // Important! We must recursively serialize any subcomponents below.
    return prettyPrint(`\`${value.prettyValue()}\``);
  }

  if (isPrimitive(value)) {
    return `\`${value}\``;
  }

  if (Array.isArray(value)) {
    return value.map((val) => prettyPrint(val));
  }

  const out = [];
  for (const key in value) {
    out.push(`${key}: ${prettyPrint(value[key])}`);
  }
  return out.join('\n- ');
};
