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

import { type Resources } from '@hcengineering/platform'

import NewRecordingButton from './components/NewRecordingButton.svelte'
import RecordingPopup from './components/RecordingPopup.svelte'
import { showPopup } from '@hcengineering/ui'

export default async (): Promise<Resources> => ({
  component: {
    NewRecordingButton
  },
  function: {
    openRecordingOverlay
  }
})

export function openRecordingOverlay (): void {
  showPopup(
    RecordingPopup,
    {},
    'movable',
    async (result) => {
      console.log('popup closed with result=', result)
    },
    async (res) => {
      console.log('popup updated with res=', res)
    },
    // todo: We need this popup to exist no matter where you navigate in the platform.
    // currently it goes away if you switch plugin apps.
    // todo: popup should start in bottom-right hand corner
    { category: 'popup', overlay: false }
  )
}
