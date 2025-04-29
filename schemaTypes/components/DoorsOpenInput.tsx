import {NumberInputProps, useFormValue} from 'sanity'
import {Stack, Text} from '@sanity/ui'

function subtractMinutesFromDate(date: string, minutes: number) {
  return new Date(new Date(date).getTime() - minutes * 60000)
}

export function DoorsOpenInput(props: NumberInputProps) {
  return <div style={{border: '1px solid red'}}>DoorsOpenInput</div>
}
