export default {
  id: "DjlXLX2s",
  type: "quiz",
  title: "Virtual Lab Survey",
  workspace: {
    href: "https://api.typeform.com/workspaces/Ghm6de",
  },
  theme: {
    href: "https://api.typeform.com/themes/qHWOQ7",
  },
  settings: {
    language: "en",
    progress_bar: "proportion",
    meta: {
      allow_indexing: false,
    },
    hide_navigation: false,
    is_public: true,
    is_trial: false,
    show_progress_bar: true,
    show_typeform_branding: true,
    are_uploads_public: false,
    show_time_to_complete: true,
    pro_subdomain_enabled: false,
    capabilities: {
      e2e_encryption: {
        enabled: false,
        modifiable: false,
      },
    },
  },
  thankyou_screens: [
    {
      id: "oBB8D27w4zil",
      ref: "01FKK5KXV1AT4AG5XFCZYNGTTN",
      title: "",
      properties: {
        show_button: true,
        share_icons: true,
        button_mode: "reload",
        button_text: "reload",
      },
    },
    {
      id: "DefaultTyScreen",
      ref: "default_tys",
      title:
        "Thanks for completing this typeform\nNow *create your own* — it's free, easy, & beautiful",
      properties: {
        show_button: true,
        share_icons: false,
        button_mode: "redirect",
        button_text: "Create a *typeform*",
        redirect_url:
          "https://www.typeform.com/explore/?utm_campaign=DjlXLX2s&utm_source=typeform.com&utm_medium=typeform&utm_content=typeform-thankyoubutton&utm_term=EN",
      },
      attachment: {
        type: "image",
        href: "https://images.typeform.com/images/2dpnUBBkz2VN",
      },
    },
  ],
  fields: [
    {
      id: "5Qw3haKmUlKG",
      title: "Hello, what's your name?",
      ref: "whats_your_name",
      properties: {},
      validations: {
        required: false,
      },
      type: "short_text",
      attachment: {
        type: "image",
        href: "https://images.typeform.com/images/WMALzu59xbXQ",
      },
      layout: {
        type: "split",
        attachment: {
          type: "image",
          href: "https://images.typeform.com/images/WMALzu59xbXQ",
        },
      },
    },
    {
      id: "8ryQFvgTH3gu",
      title: "What's your age?",
      ref: "what_your_age",
      properties: {},
      validations: {
        required: false,
      },
      type: "short_text",
    },
    {
      id: "0gQBt2ecOSRK",
      title:
        "Nice to meet you, {{field:whats_your_name}}, how is your day going?",
      ref: "how_is_your_day",
      properties: {
        randomize: false,
        allow_multiple_selection: true,
        allow_other_choice: false,
        vertical_alignment: true,
        choices: [
          {
            id: "rwFklpTij36Y",
            ref: "01FKK5KXV12BWYAMGXJZ5Q0T52",
            label: "Not so well...",
          },
          {
            id: "yAF3m8IpcF2S",
            ref: "c8c780a6-4210-4673-bf07-4130efde9151",
            label: "Terrific!",
          },
          {
            id: "8K30MHQOskcI",
            ref: "67554758-9085-45b8-b658-46e5b9686361",
            label: "Just OK...",
          },
        ],
      },
      validations: {
        required: false,
      },
      type: "multiple_choice",
    },
  ],
  _links: {
    display: "https://qaexgf20gqj.typeform.com/to/DjlXLX2s",
  },
};
