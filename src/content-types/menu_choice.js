const base = require('./_base')
const utils = require('./_utils')

function renderElement(data, channel) {
  return utils.extractPayload('whatsapp-list', data)
}

module.exports = {
  id: 'whatsapp-menu-choice',
  group: 'WhatsApp',
  title: 'WhatsApp Menu Choice',

  jsonSchema: {
    description: 'Choice element for WhatsApp',
    type: 'object',
    required: ['choices'],
    properties: {
      text: {
        type: 'string',
        title: 'message'
      },
      button: {
        type: 'string',
        title: 'Button text'
      },
      choices: {
        type: 'array',
        title: 'Choice',
        minItems: 1,
        maxItems: 10,
        items: {
          type: 'object',
          required: ['section', 'title', 'value', 'description'],
          properties: {
            section: {
              description: 'Section title',
              type: 'string',
              title: 'Section title'
            },
            title: {
              description: 'module.builtin.types.singleChoice.itemTitle',
              type: 'string',
              title: 'Message'
            },
            value: {
              description: 'module.builtin.types.singleChoice.itemValue',
              type: 'string',
              title: 'Value'
            },
            description: {
              description: 'Item description',
              type: 'string',
              title: 'Item description'
            }
          }
        }
      }
    }
  },

  uiSchema: {
    text: {
      'ui:field': 'i18n_field',
      $subtype: 'textarea'
    },
    button: {
      'ui:field': 'i18n_field',
      $subtype: 'textarea'
    },
    choices: {
      'ui:field': 'i18n_array'
    }
  },
  computePreviewText: formData =>
    formData.choices && formData.text && formData.button && `Choices (${formData.choices.length}) ${formData.text} ${formData.button}`,
  renderElement: renderElement,
  hidden: true
}
