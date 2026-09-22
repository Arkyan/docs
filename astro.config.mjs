// @ts-check
import starlight from "@astrojs/starlight";
import starlightSidebarTopics from "starlight-sidebar-topics";
import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      title: {
        en: "TrucklineMP",
        pl: "TrucklineMP",
        de: "TrucklineMP",
        fr: "TrucklineMP",
        ru: "TrucklineMP",
        tr: "TrucklineMP",
        "pt-br": "TrucklineMP",
      },
      defaultLocale: "root",
      locales: {
        root: {
          label: "English",
          lang: "en",
        },
        pl: {
          label: "Polski",
          lang: "pl",
        },
        de: {
          label: "Deutsch",
          lang: "de",
        },
        fr: {
          label: "Français",
          lang: "fr",
        },
        ru: {
          label: "Русский",
          lang: "ru",
        },
        ta: {
          label: "தமிழ்",
          lang: "ta",
        },
        tr: {
          label: "Türkçe",
          lang: "tr",
        },
        "pt-br": {
          label: "Português (Brasil)",
          lang: "pt-BR",
        },
      },
      logo: {
        src: "./src/assets/truckline_large_no_shadow.svg",
        alt: "TrucklineMP",
        replacesTitle: true,
      },
      favicon: "/truckline_no_shadow.svg",
      customCss: [
        "@fontsource-variable/geist",
        "@fontsource-variable/geist-mono",
        "./src/styles/marathon.css",
      ],
      social: [
        {
          icon: "github",
          label: "GitHub",
          href: "https://github.com/TrucklineMP/docs",
        },
        {
          icon: "discord",
          label: "Discord",
          href: "https://discord.gg/trucklinemp",
        },
        { icon: "external", label: "Website", href: "https://trucklinemp.com" },
      ],
      components: {
        SiteTitle: "./src/components/SiteTitle.astro",
        Footer: "./src/components/Footer.astro",
        SidebarSublist: "./src/components/SidebarSublist.astro",
        Banner: "./src/components/Banner.astro",
      },
      plugins: [
        starlightSidebarTopics([
          {
            label: {
              en: "Web Docs",
              "pt-br": "Documentação Web",
              "pt-BR": "Documentação Web",
              ru: "Веб-документация",
            },
            link: "web-docs/vtc/creating",
            icon: "open-book",
            items: [
              {
                label: "VTC Programs",
                translations: {
                  "pt-BR": "Programas VTC",
                  ru: "Программы VTC",
                  de: "VTC Programme",
                },
                collapsed: false,
                items: [
                  {
                    slug: "web-docs/vtc-programs/verified",
                    label: "Verified VTC Program",
                    translations: {
                      "pt-BR": "Programa de VTCs Verificadas",
                      pl: "Zweryfikowany Program VTC",
                      ru: "Программа верификации VTC",
                      de: "Verifizierungsprogramm für VTCs",
                    },
                  },
                  {
                    slug: "web-docs/vtc-programs/discord-role",
                    label: "Verified VTC Discord Role",
                    translations: {
                      "pt-BR": "Cargo do Discord para VTCs Verificadas",
                      pl: "Rola Discord Zweryfikowanego VTC",
                      ru: "Роль Discord верифицированного VTC",
                      de: "Verifizierte VTC-Discord-Rolle",
                    },
                  },
                  {
                    slug: "web-docs/vtc-programs/partnered",
                    label: "Partnered VTC Program",
                    translations: {
                      "pt-BR": "Programa de VTCs Parceiras",
                      pl: "Partnerski Program VTC",
                      ru: "Партнёрская программа VTC",
                      de: "Partner-VTC-Programm",
                    },
                  },
                  {
                    slug: "web-docs/vtc-programs/livery-guidelines",
                    label: "VTC Livery Guidelines",
                    translations: {
                      "pt-BR": "Diretrizes de Pintura para VTCs",
                      pl: "Wytyczne Malowania VTC",
                      ru: "Правила оформления окрасок VTC",
                      de: "VTC-Lackierungsrichtlinien",
                    },
                  },
                ],
              },
              {
                label: "VTC Guides",
                translations: {
                  "pt-BR": "Guias de VTC",
                  ru: "Руководства по VTC",
                },
                collapsed: false,
                items: [
                  {
                    slug: "web-docs/vtc/creating",
                    label: "Creating a VTC",
                    translations: {
                      "pt-BR": "Criar uma VTC",
                      ru: "Создание VTC",
                    },
                  },
                  {
                    slug: "web-docs/vtc/directory",
                    label: "VTC Directory",
                    translations: {
                      "pt-BR": "Diretório de VTCs",
                      ru: "Каталог VTC",
                    },
                  },
                  {
                    slug: "web-docs/vtc/general-settings",
                    label: "General Settings",
                    translations: {
                      "pt-BR": "Configurações Gerais",
                      pl: "Ustawienia Ogólne",
                      ru: "Общие настройки",
                      de: "Allgemeine VTC-Einstellungen",
                    },
                  },
                  {
                    slug: "web-docs/vtc/appearance",
                    label: "Appearance",
                    translations: {
                      "pt-BR": "Aparência",
                      ru: "Оформление",
                    },
                  },
                  {
                    slug: "web-docs/vtc/member-activity",
                    label: "Member Activity",
                    translations: {
                      "pt-BR": "Atividade dos Membros",
                      ru: "Активность участников",
                    },
                  },
                  {
                    slug: "web-docs/vtc/roles-permissions",
                    label: "Roles & Permissions",
                    translations: {
                      "pt-BR": "Cargos e Permissões",
                      pl: "Role i Uprawnienia",
                      ru: "Роли и права доступа",
                    },
                  },
                  {
                    slug: "web-docs/vtc/member-management",
                    label: "Member Management",
                    translations: {
                      "pt-BR": "Gerenciamento de Membros",
                      pl: "Zarządzanie Członkami",
                      ru: "Управление участниками",
                    },
                  },
                  {
                    slug: "web-docs/vtc/recruitment",
                    label: "Recruitment",
                    translations: {
                      "pt-BR": "Recrutamento",
                      pl: "Rekrutacja",
                      ru: "Набор участников",
                    },
                  },
                  {
                    slug: "web-docs/vtc/events",
                    label: "Events",
                    translations: {
                      "pt-BR": "Eventos",
                      ru: "Мероприятия",
                    },
                  },
                  {
                    slug: "web-docs/vtc/integrations",
                    label: "Integrations",
                    translations: {
                      "pt-BR": "Integrações",
                      ru: "Интеграции",
                    },
                  },
                  {
                    slug: "web-docs/vtc/news",
                    label: "News",
                    translations: {
                      "pt-BR": "Notícias",
                      ru: "Новости",
                    },
                  },
                  {
                    slug: "web-docs/vtc/gallery",
                    label: "Gallery",
                    translations: {
                      "pt-BR": "Galeria",
                      ru: "Галерея",
                    },
                  },
                  {
                    slug: "web-docs/vtc/announcements",
                    label: "Announcements",
                    translations: {
                      "pt-BR": "Anúncios",
                      pl: "Ogłoszenia",
                      ru: "Уведомления",
                    },
                  },
                  {
                    slug: "web-docs/vtc/discord-verification",
                    label: "Discord Verification",
                    translations: {
                      "pt-BR": "Verificação do Discord",
                      pl: "Weryfikacja Discord",
                      ru: "Верификация Discord",
                      de: "VTC-Discord-Server-Verifizierung",
                    },
                  },
                  {
                    slug: "web-docs/vtc/visibility",
                    label: "Visibility",
                    translations: {
                      "pt-BR": "Visibilidade",
                      pl: "Widoczność",
                      ru: "Видимость",
                    },
                  },
                  {
                    slug: "web-docs/vtc/sister-companies",
                    label: "Sister Companies",
                    translations: {
                      "pt-BR": "Empresas Irmãs",
                      ru: "Родственные компании",
                    },
                  },
                  {
                    slug: "web-docs/vtc/partnerships",
                    label: "Partnerships",
                    translations: {
                      "pt-BR": "Parcerias",
                      ru: "Партнёрства",
                    },
                  },
                  {
                    slug: "web-docs/vtc/activity-log",
                    label: "Activity Log",
                    translations: {
                      "pt-BR": "Registro de Atividade",
                      ru: "Журнал активности",
                    },
                  },
                  {
                    slug: "web-docs/vtc/analytics",
                    label: "Analytics",
                    translations: {
                      "pt-BR": "Análises",
                      ru: "Аналитика",
                    },
                  },
                  {
                    slug: "web-docs/vtc/support-tickets",
                    label: "Support Tickets",
                    translations: {
                      "pt-BR": "Tickets de Suporte",
                      ru: "Тикеты поддержки",
                    },
                  },
                  {
                    slug: "web-docs/vtc/disbanding",
                    label: "Disbanding a VTC",
                    translations: {
                      "pt-BR": "Dissolver uma VTC",
                      ru: "Расформирование VTC",
                    },
                  },
                ],
              },
              {
                label: "Discord Bot",
                translations: {
                  "pt-BR": "Bot do Discord",
                  pl: "Bot Discord",
                  ru: "Бот Discord",
                },
                collapsed: false,
                items: [
                  {
                    slug: "web-docs/discord-bot/connection-flows",
                    label: "Connection Flows",
                    translations: {
                      "pt-BR": "Fluxos de Conexão",
                      ru: "Варианты подключения Discord",
                    },
                  },
                  {
                    slug: "web-docs/discord-bot/linked-roles",
                    label: "Linked Roles",
                    translations: {
                      "pt-BR": "Linked Roles",
                      pl: "Połączone Role",
                      ru: "Привязанные Роли",
                    },
                  },
                  {
                    slug: "web-docs/discord-bot/notifications",
                    label: "Discord Notifications",
                    translations: {
                      "pt-BR": "Notificações do Discord",
                      ru: "Уведомления Discord",
                    },
                  },
                  {
                    slug: "web-docs/discord-bot/official-server",
                    label: "Official Discord Server",
                    translations: {
                      "pt-BR": "Servidor Oficial do Discord",
                      ru: "Официальный сервер Discord",
                    },
                  },
                ],
              },
              {
                label: "Account Guides",
                translations: {
                  "pt-BR": "Guias de Conta",
                  ru: "Руководства по учетным записям",
                },
                collapsed: false,
                items: [
                  {
                    slug: "web-docs/account/profile-settings",
                    label: "Profile Settings",
                    translations: {
                      "pt-BR": "Configurações de Perfil",
                      pl: "Ustawienia Profilu",
                      ru: "Настройки профиля",
                      de: "Profileinstellungen",
                    },
                  },
                  {
                    slug: "web-docs/account/public-profile",
                    label: "Public Profile",
                    translations: {
                      "pt-BR": "Perfil Público",
                      ru: "Публичный профиль",
                    },
                  },
                  {
                    slug: "web-docs/account/user-directory",
                    label: "User Directory",
                    translations: {
                      "pt-BR": "Diretório de Usuários",
                      ru: "Каталог пользователей",
                    },
                  },
                  {
                    slug: "web-docs/account/security",
                    label: "Account Security",
                    translations: {
                      "pt-BR": "Segurança da Conta",
                      pl: "Bezpieczeństwo Konta",
                      ru: "Безопасность аккаунта",
                      de: "Kontosicherheit",
                    },
                  },
                  {
                    slug: "web-docs/account/connections",
                    label: "Connections",
                    translations: {
                      "pt-BR": "Conexões",
                      pl: "Połączenia",
                      ru: "Подключённые аккаунты",
                    },
                  },
                  {
                    slug: "web-docs/account/regional-timezone",
                    label: "Regional & Timezone",
                    translations: {
                      "pt-BR": "Região e Fuso Horário",
                      ru: "Регион и часовой пояс",
                    },
                  },
                  {
                    slug: "web-docs/account/notifications",
                    label: "Notifications",
                    translations: {
                      "pt-BR": "Notificações",
                      ru: "Уведомления",
                    },
                  },
                  {
                    slug: "web-docs/account/appearance-preferences",
                    label: "Appearance & Preferences",
                    translations: {
                      "pt-BR": "Aparência e Preferências",
                      pl: "Wygląd i Preferencje",
                      ru: "Внешний вид и предпочтения",
                    },
                  },
                  {
                    slug: "web-docs/account/onboarding",
                    label: "Onboarding Tour",
                    translations: {
                      "pt-BR": "Tour de Boas-vindas",
                      ru: "Ознакомительный тур",
                    },
                  },
                  {
                    slug: "web-docs/account/supporter",
                    label: "Supporter & Premium",
                    translations: {
                      "pt-BR": "Supporter e Premium",
                      ru: "Спонсор и Премиум",
                    },
                  },
                  {
                    slug: "web-docs/account/forum",
                    label: "Forum",
                    translations: {
                      "pt-BR": "Fórum",
                      ru: "Форум",
                    },
                  },
                  {
                    slug: "web-docs/account/support-tickets",
                    label: "Support Tickets",
                    translations: {
                      "pt-BR": "Tickets de Suporte",
                      ru: "Тикеты поддержки",
                    },
                  },
                  {
                    slug: "web-docs/account/bans-appeals",
                    label: "Bans & Appeals",
                    translations: {
                      "pt-BR": "Banimentos e Recursos",
                      ru: "Баны и апелляции",
                    },
                  },
                  {
                    slug: "web-docs/account/standing-licence",
                    label: "Standing & Driver Licence",
                    translations: {
                      "pt-BR": "Status e Carteira de Motorista",
                      ru: "Репутация и водительские права",
                    },
                  },
                  {
                    slug: "web-docs/account/deletion",
                    label: "Account Deletion",
                    translations: {
                      "pt-BR": "Exclusão da Conta",
                      pl: "Usunięcie Konta",
                      ru: "Удаление аккаунта",
                    },
                  },
                ],
              },
              {
                label: "Platform Guides",
                translations: {
                  "pt-BR": "Guias da Plataforma",
                  ru: "Руководства по платформе",
                },
                collapsed: false,
                items: [
                  {
                    slug: "web-docs/platform/news",
                    label: "Platform News",
                    translations: {
                      "pt-BR": "Notícias da Plataforma",
                      ru: "Новости платформы",
                    },
                  },
                  {
                    slug: "web-docs/platform/polls",
                    label: "Community Polls",
                    translations: {
                      "pt-BR": "Enquetes da Comunidade",
                      ru: "Опросы сообщества",
                    },
                  },
                  {
                    slug: "web-docs/platform/programs",
                    label: "Programs & Recognition",
                    translations: {
                      "pt-BR": "Programas e Reconhecimento",
                      ru: "Программы и признание",
                    },
                  },
                  {
                    slug: "web-docs/platform/changelog-status",
                    label: "Status & Changelog",
                    translations: {
                      "pt-BR": "Status e Changelog",
                      ru: "Статус и список изменений",
                    },
                  },
                ],
              },
              {
                label: "Contribute",
                translations: {
                  "pt-BR": "Contribuir",
                  ru: "Внесите вклад",
                },
                collapsed: false,
                items: [
                  {
                    slug: "web-docs/contribute/contributors",
                    label: "Contributors",
                    translations: {
                      "pt-BR": "Colaboradores",
                      pl: "Współtwórcy",
                      ru: "Участники",
                    },
                  },
                  {
                    slug: "web-docs/contribute/contributing",
                    label: "Translate Documentation",
                    translations: {
                      "pt-BR": "Traduzir a Documentação",
                      pl: "Tłumacz Dokumentację",
                      ru: "Перевод документации",
                    },
                  },
                  {
                    slug: "web-docs/contribute/translation-status",
                    label: "Translation Status",
                    translations: {
                      "pt-BR": "Status das Traduções",
                      ru: "Статус перевода",
                    },
                  },
                ],
              },
            ],
          },
          {
            label: {
              en: "Web API",
              "pt-br": "API Web",
              "pt-BR": "API Web",
              ru: "Веб API",
            },
            link: "web-api/overview",
            icon: "setting",
            items: [
              {
                label: "Getting Started",
                translations: {
                  "pt-BR": "Primeiros Passos",
                  ru: "Начало работы",
                },
                collapsed: false,
                items: [
                  {
                    slug: "web-api/overview",
                    label: "Platform Overview",
                    translations: {
                      "pt-BR": "Visão Geral da Plataforma",
                      ru: "Обзор платформы",
                    },
                  },
                  {
                    slug: "web-api/console",
                    label: "Developer Console",
                    translations: {
                      "pt-BR": "Console do Desenvolvedor",
                      ru: "Консоль разработчика",
                    },
                  },
                ],
              },
              {
                label: "Public API",
                translations: {
                  "pt-BR": "API Pública",
                  ru: "Публичный API",
                },
                collapsed: false,
                items: [
                  {
                    slug: "web-api/public-api",
                    label: "Public API",
                    translations: {
                      "pt-BR": "API Pública",
                      ru: "Публичный API",
                    },
                  },
                  {
                    slug: "web-api/public-api/doc",
                    label: "Doc",
                    translations: {
                      "pt-BR": "Referência",
                      ru: "Справочник",
                    },
                  },
                  {
                    slug: "web-api/leaked-secrets",
                    label: "Leaked API Keys & Secrets",
                    translations: {
                      "pt-BR": "Chaves de API e Segredos Expostos",
                      ru: "Утечка API-ключей и секретов",
                    },
                  },
                ],
              },
              {
                label: "TypeScript SDK",
                translations: {
                  "pt-BR": "SDK TypeScript",
                  ru: "TypeScript SDK",
                },
                collapsed: false,
                items: [
                  {
                    slug: "web-api/sdk",
                    label: "TypeScript SDK",
                    translations: {
                      "pt-BR": "SDK TypeScript",
                      ru: "TypeScript SDK",
                    },
                  },
                  {
                    slug: "web-api/sdk-contributing",
                    label: "Contributing to the SDK",
                    translations: {
                      "pt-BR": "Contribuir para o SDK",
                      ru: "Вклад в SDK",
                    },
                  },
                  {
                    slug: "web-api/i18n-translations",
                    label: "i18n & Translations",
                    translations: {
                      "pt-BR": "i18n e Traduções",
                      ru: "Локализация и переводы",
                    },
                  },
                ],
              },
              {
                label: "Integrations",
                translations: {
                  "pt-BR": "Integrações",
                  ru: "Интеграции",
                },
                collapsed: false,
                items: [
                  {
                    slug: "web-api/oauth-apps",
                    label: "OAuth Apps",
                    translations: {
                      "pt-BR": "Aplicativos OAuth",
                      ru: "Приложения OAuth",
                    },
                  },
                  {
                    slug: "web-api/webhooks",
                    label: "Webhooks",
                    translations: {
                      "pt-BR": "Webhooks",
                      ru: "Вебхуки",
                    },
                  },
                ],
              },
            ],
          },
          {
            label: {
              en: "Game Docs",
              "pt-br": "Documentação do Jogo",
              "pt-BR": "Documentação do Jogo",
            },
            link: "game-docs",
            icon: "seti:asm",
            items: [
              {
                label: "Game Docs",
                translations: {
                  "pt-BR": "Documentação do Jogo",
                },
                collapsed: false,
                items: [{ slug: "game-docs", label: "Overview", translations: { "pt-BR": "Visão Geral" } }],
              },
            ],
          },
          {
            label: {
              en: "Game SDK",
              "pt-br": "SDK do Jogo",
              "pt-BR": "SDK do Jogo",
            },
            link: "game-sdk",
            icon: "puzzle",
            items: [
              {
                label: "Game SDK",
                translations: {
                  "pt-BR": "SDK do Jogo",
                },
                collapsed: false,
                items: [{ slug: "game-sdk", label: "Overview", translations: { "pt-BR": "Visão Geral" } }],
              },
            ],
          },
        ]),
      ],
    }),
  ],
});
