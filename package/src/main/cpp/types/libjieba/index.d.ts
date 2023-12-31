/* tslint:disable */
/* eslint-disable */

/* auto-generated by NAPI-RS */
import buffer from '@ohos.buffer';

export function load(): void
export function loadDict(dict: buffer.Buffer): void
export function cut(sentence: string | buffer.Buffer, hmm?: boolean | undefined | null): string[]
export function cutAll(sentence: string | buffer.Buffer): string[]
export function cutForSearch(sentence: string | buffer.Buffer, hmm?: boolean | undefined | null): string[]
export interface TaggedWord {
  tag: string
  word: string
}
export function tag(sentence: string | buffer.Buffer, hmm?: boolean | undefined | null): Array<TaggedWord>
export interface Keyword {
  keyword: string
  weight: number
}
export function extract(sentence: string | buffer.Buffer, topn: number, allowedPos?: string | undefined | null): Array<Keyword>
export function loadTFIDFDict(dict: buffer.Buffer): void
