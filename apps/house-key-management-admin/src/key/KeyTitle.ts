import { Key as TKey } from "../api/key/Key";

export const KEY_TITLE_FIELD = "label";

export const KeyTitle = (record: TKey): string => {
  return record.label?.toString() || String(record.id);
};
