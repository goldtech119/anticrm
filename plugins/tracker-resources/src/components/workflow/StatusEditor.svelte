<!--
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
-->
<script lang="ts">
  import { Data } from '@hcengineering/core'
  import presentation from '@hcengineering/presentation'
  import { IssueStatus } from '@hcengineering/tracker'
  import {
    Button,
    eventToHTMLElement,
    getPlatformColorDef,
    IconCircles,
    showPopup,
    themeStore
  } from '@hcengineering/ui'
  import { ColorsPopup } from '@hcengineering/view-resources'
  import { createEventDispatcher } from 'svelte'
  import tracker from '../../plugin'
  import StatusInput from './StatusInput.svelte'

  export let value: Partial<Data<IssueStatus>>
  export let isSingle = true
  export let isSaving = false

  const dispatch = createEventDispatcher()

  function pickColor (evt: MouseEvent) {
    showPopup(
      ColorsPopup,
      { selected: value.color ? getPlatformColorDef(value.color, $themeStore.dark).name : undefined },
      eventToHTMLElement(evt),
      (newColor) => {
        if (value != null) {
          value.color = newColor
        }
      }
    )
  }

  $: canSave = !isSaving && (value.name ?? '').length > 0
</script>

<div class="flex-between background-button-bg-color border-radius-1 p-2 root">
  <div class="flex flex-grow items-center clear-mins inputs">
    <div class="flex-no-shrink draggable-mark">
      {#if !isSingle}<IconCircles />{/if}
    </div>
    <!-- svelte-ignore a11y-click-events-have-key-events -->
    <div class="flex-no-shrink ml-2 color" on:click={pickColor}>
      <div class="dot" style="background-color: {getPlatformColorDef(value.color ?? 0, $themeStore.dark).color}" />
    </div>
    <div class="ml-2 w-full name">
      <StatusInput bind:value={value.name} placeholder={tracker.string.Name} focus fill />
    </div>
    <div class="ml-2 w-full">
      <StatusInput bind:value={value.description} placeholder={tracker.string.Description} fill />
    </div>
  </div>
  <div class="buttons-group small-gap flex-no-shrink ml-2 mr-1">
    <Button label={presentation.string.Cancel} kind="regular" on:click={() => dispatch('cancel')} />
    <Button label={presentation.string.Save} kind="accented" disabled={!canSave} on:click={() => dispatch('save')} />
  </div>
</div>

<style lang="scss">
  .root {
    line-height: 1.125rem;

    &:hover {
      .draggable-mark {
        opacity: 0.4;
      }
    }
  }

  .inputs {
    overflow: hidden;
    white-space: nowrap;

    .name {
      max-width: 10rem;
    }
  }

  .draggable-mark {
    position: relative;
    opacity: 0;
    width: 0.375rem;
    height: 1rem;
    margin-left: 0.25rem;
    transition: opacity 0.1s;

    &::before {
      position: absolute;
      content: '';
      inset: -0.5rem;
    }
  }

  .color {
    position: relative;
    width: 1.75rem;
    height: 1.75rem;
    background-color: var(--accent-bg-color);
    border: 1px solid transparent;
    border-radius: 0.25rem;
    cursor: pointer;

    .dot {
      position: absolute;
      content: '';
      border-radius: 50%;
      inset: 30%;
    }
  }
</style>
