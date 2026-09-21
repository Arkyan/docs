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
        pt: "TrucklineMP",
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
        pt: {
          label: "Português",
          lang: "pt",
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
            label: "Web Docs",
            translations: {
              pt: "Documentação Web",
              ru: "Веб-документация",
            },
            link: "web-docs/vtc/creating",
            icon: "open-book",
            items: [
              {
                label: "VTC Programs",
                translations: {
                  pt: "Programas VTC",
                  ru: "Программы VTC",
                  de: "VTC Programme",
                },
                collapsed: false,
                items: [
                  {
                    slug: "web-docs/vtc-programs/verified",
                    label: "Verified VTC Program",
                    translations: {
                      pt: "Programa de VTC Verificada",
                      pl: "Zweryfikowany Program VTC",
                      ru: "Программа верификации VTC",
                      de: "Verifizierungsprogramm für VTCs",
                    },
                  },
                  {
                    slug: "web-docs/vtc-programs/discord-role",
                    label: "Verified VTC Discord Role",
                    translations: {
                      pt: "Cargo Discord de VTC Verificada",
                      pl: "Rola Discord Zweryfikowanego VTC",
                      ru: "Роль Discord верифицированного VTC",
                      de: "Verifizierte VTC-Discord-Rolle",
                    },
                  },
                  {
                    slug: "web-docs/vtc-programs/partnered",
                    label: "Partnered VTC Program",
                    translations: {
                      pt: "Programa de VTC Parceira",
                      pl: "Partnerski Program VTC",
                      ru: "Партнёрская программа VTC",
                      de: "Partner-VTC-Programm",
                    },
                  },
                  {
                    slug: "web-docs/vtc-programs/livery-guidelines",
                    label: "VTC Livery Guidelines",
                    translations: {
                      pt: "Diretrizes de Pintura VTC",
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
                  pt: "Guias de VTC",
                  ru: "Руководства по VTC",
                },
                collapsed: false,
                items: [
                  {
                    slug: "web-docs/vtc/creating",
                    label: "Creating a VTC",
                    translations: {
                      pt: "Criar uma VTC",
                      ru: "Создание VTC",
                    },
                  },
                  {
                    slug: "web-docs/vtc/directory",
                    label: "VTC Directory",
                    translations: {
                      pt: "Diretório de VTCs",
                      ru: "Каталог VTC",
                    },
                  },
                  {
                    slug: "web-docs/vtc/general-settings",
                    label: "General Settings",
                    translations: {
                      pt: "Definições Gerais",
                      pl: "Ustawienia Ogólne",
                      ru: "Общие настройки",
                      de: "Allgemeine VTC-Einstellungen",
                    },
                  },
                  {
                    slug: "web-docs/vtc/appearance",
                    label: "Appearance",
                    translations: {
                      pt: "Aparência",
                      ru: "Оформление",
                    },
                  },
                  {
                    slug: "web-docs/vtc/member-activity",
                    label: "Member Activity",
                    translations: {
                      pt: "Atividade dos Membros",
                      ru: "Активность участников",
                    },
                  },
                  {
                    slug: "web-docs/vtc/roles-permissions",
                    label: "Roles & Permissions",
                    translations: {
                      pt: "Cargos e Permissões",
                      pl: "Role i Uprawnienia",
                      ru: "Роли и права доступа",
                    },
                  },
                  {
                    slug: "web-docs/vtc/member-management",
                    label: "Member Management",
                    translations: {
                      pt: "Gestão de Membros",
                      pl: "Zarządzanie Członkami",
                      ru: "Управление участниками",
                    },
                  },
                  {
                    slug: "web-docs/vtc/recruitment",
                    label: "Recruitment",
                    translations: {
                      pt: "Recrutamento",
                      pl: "Rekrutacja",
                      ru: "Набор участников",
                    },
                  },
                  {
                    slug: "web-docs/vtc/events",
                    label: "Events",
                    translations: {
                      pt: "Eventos",
                      ru: "Мероприятия",
                    },
                  },
                  {
                    slug: "web-docs/vtc/integrations",
                    label: "Integrations",
                    translations: {
                      pt: "Integrações",
                      ru: "Интеграции",
                    },
                  },
                  {
                    slug: "web-docs/vtc/news",
                    label: "News",
                    translations: {
                      pt: "Notícias",
                      ru: "Новости",
                    },
                  },
                  {
                    slug: "web-docs/vtc/gallery",
                    label: "Gallery",
                    translations: {
                      pt: "Galeria",
                      ru: "Галерея",
                    },
                  },
                  {
                    slug: "web-docs/vtc/announcements",
                    label: "Announcements",
                    translations: {
                      pt: "Anúncios",
                      pl: "Ogłoszenia",
                      ru: "Уведомления",
                    },
                  },
                  {
                    slug: "web-docs/vtc/discord-verification",
                    label: "Discord Verification",
                    translations: {
                      pt: "Verificação Discord",
                      pl: "Weryfikacja Discord",
                      ru: "Верификация Discord",
                      de: "VTC-Discord-Server-Verifizierung",
                    },
                  },
                  {
                    slug: "web-docs/vtc/visibility",
                    label: "Visibility",
                    translations: {
                      pt: "Visibilidade",
                      pl: "Widoczność",
                      ru: "Видимость",
                    },
                  },
                  {
                    slug: "web-docs/vtc/sister-companies",
                    label: "Sister Companies",
                    translations: {
                      pt: "Empresas Irmãs",
                      ru: "Родственные компании",
                    },
                  },
                  {
                    slug: "web-docs/vtc/partnerships",
                    label: "Partnerships",
                    translations: {
                      pt: "Parcerias",
                      ru: "Партнёрства",
                    },
                  },
                  {
                    slug: "web-docs/vtc/activity-log",
                    label: "Activity Log",
                    translations: {
                      pt: "Registo de Atividade",
                      ru: "Журнал активности",
                    },
                  },
                  {
                    slug: "web-docs/vtc/analytics",
                    label: "Analytics",
                    translations: {
                      pt: "Análises",
                      ru: "Аналитика",
                    },
                  },
                  {
                    slug: "web-docs/vtc/support-tickets",
                    label: "Support Tickets",
                    translations: {
                      pt: "Tickets de Suporte",
                      ru: "Тикеты поддержки",
                    },
                  },
                  {
                    slug: "web-docs/vtc/disbanding",
                    label: "Disbanding a VTC",
                    translations: {
                      pt: "Dissolver uma VTC",
                      ru: "Расформирование VTC",
                    },
                  },
                ],
              },
              {
                label: "Discord Bot",
                translations: {
                  pt: "Bot Discord",
                  pl: "Bot Discord",
                  ru: "Бот Discord",
                },
                collapsed: false,
                items: [
                  {
                    slug: "web-docs/discord-bot/connection-flows",
                    label: "Connection Flows",
                    translations: {
                      pt: "Fluxos de Ligação",
                      ru: "Варианты подключения Discord",
                    },
                  },
                  {
                    slug: "web-docs/discord-bot/linked-roles",
                    label: "Linked Roles",
                    translations: {
                      pt: "Cargos Ligados",
                      pl: "Połączone Role",
                      ru: "Привязанные Роли",
                    },
                  },
                  {
                    slug: "web-docs/discord-bot/notifications",
                    label: "Discord Notifications",
                    translations: {
                      pt: "Notificações Discord",
                      ru: "Уведомления Discord",
                    },
                  },
                  {
                    slug: "web-docs/discord-bot/official-server",
                    label: "Official Discord Server",
                    translations: {
                      pt: "Servidor Discord Oficial",
                      ru: "Официальный сервер Discord",
                    },
                  },
                ],
              },
              {
                label: "Account Guides",
                translations: {
                  pt: "Guias de Conta",
                  ru: "Руководства по учетным записям",
                },
                collapsed: false,
                items: [
                  {
                    slug: "web-docs/account/profile-settings",
                    label: "Profile Settings",
                    translations: {
                      pt: "Definições de Perfil",
                      pl: "Ustawienia Profilu",
                      ru: "Настройки профиля",
                      de: "Profileinstellungen",
                    },
                  },
                  {
                    slug: "web-docs/account/public-profile",
                    label: "Public Profile",
                    translations: {
                      pt: "Perfil Público",
                      ru: "Публичный профиль",
                    },
                  },
                  {
                    slug: "web-docs/account/user-directory",
                    label: "User Directory",
                    translations: {
                      pt: "Diretório de Utilizadores",
                      ru: "Каталог пользователей",
                    },
                  },
                  {
                    slug: "web-docs/account/security",
                    label: "Account Security",
                    translations: {
                      pt: "Segurança da Conta",
                      pl: "Bezpieczeństwo Konta",
                      ru: "Безопасность аккаунта",
                      de: "Kontosicherheit",
                    },
                  },
                  {
                    slug: "web-docs/account/connections",
                    label: "Connections",
                    translations: {
                      pt: "Ligações",
                      pl: "Połączenia",
                      ru: "Подключённые аккаунты",
                    },
                  },
                  {
                    slug: "web-docs/account/regional-timezone",
                    label: "Regional & Timezone",
                    translations: {
                      pt: "Região e Fuso Horário",
                      ru: "Регион и часовой пояс",
                    },
                  },
                  {
                    slug: "web-docs/account/notifications",
                    label: "Notifications",
                    translations: {
                      pt: "Notificações",
                      ru: "Уведомления",
                    },
                  },
                  {
                    slug: "web-docs/account/appearance-preferences",
                    label: "Appearance & Preferences",
                    translations: {
                      pt: "Aparência e Preferências",
                      pl: "Wygląd i Preferencje",
                      ru: "Внешний вид и предпочтения",
                    },
                  },
                  {
                    slug: "web-docs/account/onboarding",
                    label: "Onboarding Tour",
                    translations: {
                      pt: "Tour de Boas-vindas",
                      ru: "Ознакомительный тур",
                    },
                  },
                  {
                    slug: "web-docs/account/supporter",
                    label: "Supporter & Premium",
                    translations: {
                      pt: "Apoiante e Premium",
                      ru: "Спонсор и Премиум",
                    },
                  },
                  {
                    slug: "web-docs/account/forum",
                    label: "Forum",
                    translations: {
                      pt: "Fórum",
                      ru: "Форум",
                    },
                  },
                  {
                    slug: "web-docs/account/support-tickets",
                    label: "Support Tickets",
                    translations: {
                      pt: "Tickets de Suporte",
                      ru: "Тикеты поддержки",
                    },
                  },
                  {
                    slug: "web-docs/account/bans-appeals",
                    label: "Bans & Appeals",
                    translations: {
                      pt: "Banimentos e Recursos",
                      ru: "Баны и апелляции",
                    },
                  },
                  {
                    slug: "web-docs/account/standing-licence",
                    label: "Standing & Driver Licence",
                    translations: {
                      pt: "Reputação e Carta de Condução",
                      ru: "Репутация и водительские права",
                    },
                  },
                  {
                    slug: "web-docs/account/deletion",
                    label: "Account Deletion",
                    translations: {
                      pt: "Eliminação de Conta",
                      pl: "Usunięcie Konta",
                      ru: "Удаление аккаунта",
                    },
                  },
                ],
              },
              {
                label: "Platform Guides",
                translations: {
                  pt: "Guias da Plataforma",
                  ru: "Руководства по платформе",
                },
                collapsed: false,
                items: [
                  {
                    slug: "web-docs/platform/news",
                    label: "Platform News",
                    translations: {
                      pt: "Notícias da Plataforma",
                      ru: "Новости платформы",
                    },
                  },
                  {
                    slug: "web-docs/platform/polls",
                    label: "Community Polls",
                    translations: {
                      pt: "Sondagens da Comunidade",
                      ru: "Опросы сообщества",
                    },
                  },
                  {
                    slug: "web-docs/platform/programs",
                    label: "Programs & Recognition",
                    translations: {
                      pt: "Programas e Reconhecimento",
                      ru: "Программы и признание",
                    },
                  },
                  {
                    slug: "web-docs/platform/changelog-status",
                    label: "Status & Changelog",
                    translations: {
                      pt: "Estado e Registo de Alterações",
                      ru: "Статус и список изменений",
                    },
                  },
                ],
              },
              {
                label: "Contribute",
                translations: {
                  pt: "Contribuir",
                  ru: "Внесите вклад",
                },
                collapsed: false,
                items: [
                  {
                    slug: "web-docs/contribute/contributors",
                    label: "Contributors",
                    translations: {
                      pt: "Contribuidores",
                      pl: "Współtwórcy",
                      ru: "Участники",
                    },
                  },
                  {
                    slug: "web-docs/contribute/contributing",
                    label: "Translate Documentation",
                    translations: {
                      pt: "Traduzir a Documentação",
                      pl: "Tłumacz Dokumentację",
                      ru: "Перевод документации",
                    },
                  },
                  {
                    slug: "web-docs/contribute/translation-status",
                    label: "Translation Status",
                    translations: {
                      pt: "Estado das Traduções",
                      ru: "Статус перевода",
                    },
                  },
                ],
              },
            ],
          },
          {
            label: "Web API",
            translations: {
              pt: "API Web",
              ru: "Веб API",
            },
            link: "web-api/overview",
            icon: "setting",
            items: [
              {
                label: "Getting Started",
                translations: {
                  pt: "Primeiros Passos",
                  ru: "Начало работы",
                },
                collapsed: false,
                items: [
                  {
                    slug: "web-api/overview",
                    label: "Platform Overview",
                    translations: {
                      pt: "Visão Geral da Plataforma",
                      ru: "Обзор платформы",
                    },
                  },
                  {
                    slug: "web-api/console",
                    label: "Developer Console",
                    translations: {
                      pt: "Consola de Programador",
                      ru: "Консоль разработчика",
                    },
                  },
                ],
              },
              {
                label: "Public API",
                translations: {
                  pt: "API Pública",
                  ru: "Публичный API",
                },
                collapsed: false,
                items: [
                  {
                    slug: "web-api/public-api",
                    label: "Public API",
                    translations: {
                      pt: "API Pública",
                      ru: "Публичный API",
                    },
                  },
                  {
                    slug: "web-api/public-api/doc",
                    label: "Doc",
                    translations: {
                      pt: "Referência",
                      ru: "Справочник",
                    },
                  },
                  {
                    slug: "web-api/leaked-secrets",
                    label: "Leaked API Keys & Secrets",
                    translations: {
                      pt: "Fuga de Chaves de API e Segredos",
                      ru: "Утечка API-ключей и секретов",
                    },
                  },
                ],
              },
              {
                label: "TypeScript SDK",
                translations: {
                  pt: "SDK TypeScript",
                  ru: "TypeScript SDK",
                },
                collapsed: false,
                items: [
                  {
                    slug: "web-api/sdk",
                    label: "TypeScript SDK",
                    translations: {
                      pt: "SDK TypeScript",
                      ru: "TypeScript SDK",
                    },
                  },
                  {
                    slug: "web-api/sdk-contributing",
                    label: "Contributing to the SDK",
                    translations: {
                      pt: "Contribuir para o SDK",
                      ru: "Вклад в SDK",
                    },
                  },
                  {
                    slug: "web-api/i18n-translations",
                    label: "i18n & Translations",
                    translations: {
                      pt: "i18n e Traduções",
                      ru: "Локализация и переводы",
                    },
                  },
                ],
              },
              {
                label: "Integrations",
                translations: {
                  pt: "Integrações",
                  ru: "Интеграции",
                },
                collapsed: false,
                items: [
                  {
                    slug: "web-api/oauth-apps",
                    label: "OAuth Apps",
                    translations: {
                      pt: "Aplicações OAuth",
                      ru: "Приложения OAuth",
                    },
                  },
                  {
                    slug: "web-api/webhooks",
                    label: "Webhooks",
                    translations: {
                      pt: "Webhooks",
                      ru: "Вебхуки",
                    },
                  },
                ],
              },
            ],
          },
          {
            label: "Game Docs",
            translations: {
              pt: "Documentação do Jogo",
            },
            link: "game-docs",
            icon: "seti:asm",
            items: [
              {
                label: "Game Docs",
                translations: {
                  pt: "Documentação do Jogo",
                },
                collapsed: false,
                items: [{ slug: "game-docs", label: "Overview", translations: { pt: "Visão Geral" } }],
              },
            ],
          },
          {
            label: "Game SDK",
            translations: {
              pt: "SDK do Jogo",
            },
            link: "game-sdk",
            icon: "puzzle",
            items: [
              {
                label: "Game SDK",
                translations: {
                  pt: "SDK do Jogo",
                },
                collapsed: false,
                items: [{ slug: "game-sdk", label: "Overview", translations: { pt: "Visão Geral" } }],
              },
            ],
          },
        ]),
      ],
    }),
  ],
});
