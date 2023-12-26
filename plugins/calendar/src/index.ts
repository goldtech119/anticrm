// Copyright © 2022 Hardcore Engineering Inc.
//
// Licensed under the Eclipse Public License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License. You may
// obtain a copy of the License at https://www.eclipse.org/legal/epl-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
//
// See the License for the specific language governing permissions and
// limitations under the License.

import { Contact } from '@hcengineering/contact'
import type { AttachedDoc, Class, Doc, Markup, Ref, Space, Timestamp } from '@hcengineering/core'
import { NotificationType } from '@hcengineering/notification'
import type { Asset, IntlString, Metadata, Plugin } from '@hcengineering/platform'
import { plugin } from '@hcengineering/platform'
import type { Handler, IntegrationType } from '@hcengineering/setting'
import { AnyComponent } from '@hcengineering/ui'

/**
 * @public
 */
export interface Calendar extends Space {}

/**
 * @public
 * RFC5545
 */
export interface RecurringRule {
  freq: 'SECONDLY' | 'MINUTELY' | 'HOURLY' | 'DAILY' | 'WEEKLY' | 'MONTHLY' | 'YEARLY'
  endDate?: Timestamp
  count?: number
  interval?: number
  bySecond?: number[]
  byMinute?: number[]
  byHour?: number[]
  byDay?: string[]
  byMonthDay?: number[]
  byYearDay?: number[]
  byWeekNo?: number[]
  byMonth?: number[]
  bySetPos?: number[]
  wkst?: 'SU' | 'MO' | 'TU' | 'WE' | 'TH' | 'FR' | 'SA'
}

/**
 * @public
 */
export interface ReccuringEvent extends Event {
  rules: RecurringRule[]
  exdate: Timestamp[]
  rdate: Timestamp[]
}

/**
 * @public
 */
export interface Event extends AttachedDoc {
  eventId: string
  title: string
  description: Markup

  location?: string

  allDay: boolean

  // Event scheduled date
  date: Timestamp

  // Event due date for long events.
  dueDate: Timestamp

  attachments?: number

  participants: Ref<Contact>[]

  externalParticipants?: string[]

  reminders?: Timestamp[]

  access: 'freeBusyReader' | 'reader' | 'writer' | 'owner'
}

/**
 * @public
 * use for an instance of a recurring event
 */
export interface ReccuringInstance extends Event {
  recurringEventId: string
  originalStartTime: number
  isCancelled?: boolean
  virtual?: boolean
}

/**
 * @public
 */
export const calendarId = 'calendar' as Plugin

/**
 * @public
 */
const calendarPlugin = plugin(calendarId, {
  class: {
    Calendar: '' as Ref<Class<Calendar>>,
    Event: '' as Ref<Class<Event>>,
    ReccuringEvent: '' as Ref<Class<ReccuringEvent>>,
    ReccuringInstance: '' as Ref<Class<ReccuringInstance>>
  },
  icon: {
    Calendar: '' as Asset,
    Location: '' as Asset,
    Reminder: '' as Asset,
    Notifications: '' as Asset
  },
  space: {
    // deprecated
    PersonalEvents: '' as Ref<Space>
  },
  app: {
    Calendar: '' as Ref<Doc>
  },
  component: {
    PersonsPresenter: '' as AnyComponent,
    Events: '' as AnyComponent,
    DateTimePresenter: '' as AnyComponent,
    DocReminder: '' as AnyComponent
  },
  string: {
    Title: '' as IntlString,
    Calendar: '' as IntlString,
    Description: '' as IntlString,
    Date: '' as IntlString,
    DueTo: '' as IntlString,
    Calendars: '' as IntlString,
    CreateCalendar: '' as IntlString,
    Location: '' as IntlString,
    Participants: '' as IntlString,
    NoParticipants: '' as IntlString,
    PersonsLabel: '' as IntlString,
    EventNumber: '' as IntlString,
    Reminders: '' as IntlString
  },
  handler: {
    DisconnectHandler: '' as Handler
  },
  integrationType: {
    Calendar: '' as Ref<IntegrationType>
  },
  metadata: {
    CalendarServiceURL: '' as Metadata<string>
  },
  ids: {
    ReminderNotification: '' as Ref<NotificationType>,
    NoAttached: '' as Ref<Event>
  }
})

export default calendarPlugin
export * from './utils'
