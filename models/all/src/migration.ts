//
// Copyright © 2020 Anticrm Platform Contributors.
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
//

// Import migrate operations.
import { MigrateOperation } from '@hcengineering/model'
import { attachmentOperation } from '@hcengineering/model-attachment'
import { automationOperation } from '@hcengineering/model-automation'
import { chunterOperation } from '@hcengineering/model-chunter'
import { contactOperation } from '@hcengineering/model-contact'
import { coreOperation } from '@hcengineering/model-core'
import { gmailOperation } from '@hcengineering/model-gmail'
import { leadOperation } from '@hcengineering/model-lead'
import { preferenceOperation } from '@hcengineering/model-preference'
import { notificationOperation } from '@hcengineering/model-notification'
import { settingOperation } from '@hcengineering/model-setting'
import { recruitOperation } from '@hcengineering/model-recruit'
import { tagsOperation } from '@hcengineering/model-tags'
import { taskOperation } from '@hcengineering/model-task'
import { inventoryOperation } from '@hcengineering/model-inventory'
import { telegramOperation } from '@hcengineering/model-telegram'
import { templatesOperation } from '@hcengineering/model-templates'
import { viewOperation } from '@hcengineering/model-view'
import { trackerOperation } from '@hcengineering/model-tracker'
import { boardOperation } from '@hcengineering/model-board'
import { hrOperation } from '@hcengineering/model-hr'
import { documentOperation } from '@hcengineering/model-document'
import { bitrixOperation } from '@hcengineering/model-bitrix'
import { calendarOperation } from '@hcengineering/model-calendar'

export const migrateOperations: [string, MigrateOperation][] = [
  ['core', coreOperation],
  ['chunter', chunterOperation],
  ['calendar', calendarOperation],
  ['gmail', gmailOperation],
  ['templates', templatesOperation],
  ['telegram', telegramOperation],
  ['task', taskOperation],
  ['attachment', attachmentOperation],
  ['automation', automationOperation],
  ['lead', leadOperation],
  ['preference', preferenceOperation],
  ['recruit', recruitOperation],
  ['view', viewOperation],
  ['contact', contactOperation],
  ['tags', tagsOperation],
  ['notification', notificationOperation],
  ['setting', settingOperation],
  ['tracker', trackerOperation],
  ['board', boardOperation],
  ['hr', hrOperation],
  ['document', documentOperation],
  ['bitrix', bitrixOperation],
  ['inventiry', inventoryOperation]
]
