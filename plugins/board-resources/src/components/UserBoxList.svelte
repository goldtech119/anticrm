<script lang="ts">
  import { Employee } from '@hcengineering/contact'
  import { Ref } from '@hcengineering/core'

  import contact from '@hcengineering/contact'
  import board from '../plugin'
  import { Component } from '@hcengineering/ui'

  export let value: Ref<Employee>[]
  export let readonly = false
</script>

<Component
  is={contact.component.UserBoxList}
  props={{ items: value, label: board.string.Members, readonly }}
  on:update
/>
