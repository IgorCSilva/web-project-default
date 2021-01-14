<template>
  <div id="input" class="form1">
    <h2>Using input masks and validation</h2>

    <div class="full-box-input">
      <div class="input-box-input" :class="{ 'comp-in-focus': componentInFocus == 'textnomecompleto' }">
        <input
          class="comp-input"
          name="textnomecompleto"
          :autofocus="true"
          @focus="componentInFocus = 'textnomecompleto'"
          v-model.trim="input.name"
          @blur="$v.input.name.$touch()"
          placeholder="Nome Completo"
          type="text"
        >
      </div>
      <validation-message
        :style="{left: '0px'}"
        :validations="[
          {
            condition: $v.input.name.$error && !$v.input.name.required,
            text: 'Campo obrigatório.'
          },
          {
            condition: $v.input.name.$error && !$v.input.name.minLength,
            text: 'Digite no mínimo 4 caracteres.'
          },
          {
            condition: $v.input.name.$error && !$v.input.name.fullname,
            text: 'Você deve digitar seu nome completo.'
          }
        ]"
      />
    </div>

    <div class="group-half-input">
      <div class="half-box-input">
        <div class="input-box-input" :class="{ 'comp-in-focus': componentInFocus == 'textwhatsapppessoal' }">
          <input
            class="comp-input"
            name="textwhatsapppessoal"
            @focus="componentInFocus = 'textwhatsapppessoal'"
            placeholder="Whatsapp Pessoal"
            type="text"
            required=""
            v-model.trim="input.phone"
            @blur="$v.input.phone.$touch()"
            @input="input.phone = maskInput('phone', $event.target.value)"
          >
        </div>
        <validation-message
          :validations="[
            {
              condition: $v.input.phone.$error && !$v.input.phone.required,
              text: 'Campo obrigatório.'
            },
            {
              condition: !$v.input.phone.minLength && $v.input.phone.$error,
              text: 'Número inválido.'
            }
          ]"
        />
      </div>
      <div class="half-box-input">
        <div class="input-box-input" :class="{ 'comp-in-focus': componentInFocus == 'textdatanascimento' }">
          <input
            class="comp-input"
            name="textdatanascimento"
            @focus="componentInFocus = 'textdatanascimento'"
            placeholder="Data de Nascimento"
            type="text"
            :maxlength="10"
            required=""
            v-model.trim="input.birthDate"
            @blur="$v.input.birthDate.$touch()"
            @input="input.birthDate = maskInput('date', $event.target.value)"
          >
        </div>
        <validation-message
          :validations="[
            {
              condition: $v.input.birthDate.$error && !$v.input.birthDate.required,
              text: 'Campo obrigatório.'
            },
            {
              condition: !$v.input.birthDate.date && $v.input.birthDate.$error,
              text: 'Data inválida.'
            }
          ]"
        />
      </div>
    </div>
        
  </div>
</template>

<script>
import { required, minLength, email } from 'vuelidate/lib/validators'
import { fullname, validCpf, date } from '@/inputPatterns/patterns.js'

// Masks
import InputMask from '@/inputMasks/maskInput.js'

// Components
import ValidationMessage from '@/components/ValidationMessage'

export default {
  name: 'Input',
  data () {
    return {
      input: {
        name: '',
        phone: '',
        birthDate: ''
      },
      componentInFocus: ''
    }
  },
  components: {
    ValidationMessage
  },
  validations: {
    input: {
      name: {
        required,
        minLength: minLength(4),
        fullname
      },
      phone: {
        required,
        minLength: minLength(15)
      },
      birthDate: {
        required,
        date
      }
    }
  },
  mixins: [InputMask]
}
</script>

<style lang="scss" scoped>

.form1 {
  background-color: transparent;
  margin: 20px auto;
  width: 500px;
}

.group-half-input {
  display: flex;
  justify-content: space-between;
}

.full-box-input {
  width: 374px;
}
.half-box-input {
  width: 182px;
}

.full-box-input,
.half-box-input {
  position: relative;
  margin-top: 13px;
}


.input-box-input {
  background-color: var(--aqua-haze-2);
  border-radius: 26px;
  height: 52px;
}

.comp-in-focus {
  border: 1.3px solid var(--blueberry);
}

.full-box-input .input-box-input .comp-input {
  width: 319px;
}
.half-box-input .input-box-input .comp-input {
  width: 158px
}

.comp-input {
  background-color: transparent;
  border: 0;
  height: 30px;
  left: 24px;
  letter-spacing: 0.00px;
  line-height: 20px;
  padding: 5px;
  position: relative;
  resize: none;
  text-align: left;
  top: 10px;
  overflow: hidden;

}
.comp-input::placeholder {
  color: rgba(100, 110, 115, 0.6);
}
</style>