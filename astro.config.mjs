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
              ru: "Веб-документация",
            },
            link: "web-docs/vtc/creating",
            icon: "open-book",
            items: [
              {
                label: "VTC Programs",
                translations: {
                  ru: "Программы VTC",
                  de: "VTC Programme",
                },
                collapsed: false,
                items: [
                  {
                    slug: "web-docs/vtc-programs/verified",
                    label: "Verified VTC Program",
                    translations: {
                      pl: "Zweryfikowany Program VTC",
                      ru: "Программа верификации VTC",
                      de: "Verifizierungsprogramm für VTCs",
                    },
                  },
                  {
                    slug: "web-docs/vtc-programs/discord-role",
                    label: "Verified VTC Discord Role",
                    translations: {
                      pl: "Rola Discord Zweryfikowanego VTC",
                      ru: "Роль Discord верифицированного VTC",
                      de: "Verifizierte VTC-Discord-Rolle",
                    },
                  },
                  {
                    slug: "web-docs/vtc-programs/partnered",
                    label: "Partnered VTC Program",
                    translations: {
                      pl: "Partnerski Program VTC",
                      ru: "Партнёрская программа VTC",
                      de: "Partner-VTC-Programm",
                    },
                  },
                  {
                    slug: "web-docs/vtc-programs/livery-guidelines",
                    label: "VTC Livery Guidelines",
                    translations: {
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
                  ru: "Руководства по VTC",
                },
                collapsed: false,
                items: [
                  {
                    slug: "web-docs/vtc/creating",
                    label: "Creating a VTC",
                    translations: {
                      ru: "Создание VTC",
                    },
                  },
                  {
                    slug: "web-docs/vtc/directory",
                    label: "VTC Directory",
                    translations: {
                      ru: "Каталог VTC",
                    },
                  },
                  {
                    slug: "web-docs/vtc/general-settings",
                    label: "General Settings",
                    translations: {
                      pl: "Ustawienia Ogólne",
                      ru: "Общие настройки",
                      de: "Allgemeine VTC-Einstellungen",
                    },
                  },
                  {
                    slug: "web-docs/vtc/appearance",
                    label: "Appearance",
                    translations: {
                      ru: "Оформление",
                    },
                  },
                  {
                    slug: "web-docs/vtc/member-activity",
                    label: "Member Activity",
                    translations: {
                      ru: "Активность участников",
                    },
                  },
                  {
                    slug: "web-docs/vtc/roles-permissions",
                    label: "Roles & Permissions",
                    translations: {
                      pl: "Role i Uprawnienia",
                      ru: "Роли и права доступа",
                    },
                  },
                  {
                    slug: "web-docs/vtc/member-management",
                    label: "Member Management",
                    translations: {
                      pl: "Zarządzanie Członkami",
                      ru: "Управление участниками",
                    },
                  },
                  {
                    slug: "web-docs/vtc/recruitment",
                    label: "Recruitment",
                    translations: {
                      pl: "Rekrutacja",
                      ru: "Набор участников",
                    },
                  },
                  {
                    slug: "web-docs/vtc/events",
                    label: "Events",
                    translations: {
                      ru: "Мероприятия",
                    },
                  },
                  {
                    slug: "web-docs/vtc/integrations",
                    label: "Integrations",
                    translations: {
                      ru: "Интеграции",
                    },
                  },
                  {
                    slug: "web-docs/vtc/news",
                    label: "News",
                    translations: {
                      ru: "Новости",
                    },
                  },
                  {
                    slug: "web-docs/vtc/gallery",
                    label: "Gallery",
                    translations: {
                      ru: "Галерея",
                    },
                  },
                  {
                    slug: "web-docs/vtc/announcements",
                    label: "Announcements",
                    translations: {
                      pl: "Ogłoszenia",
                      ru: "Уведомления",
                    },
                  },
                  {
                    slug: "web-docs/vtc/discord-verification",
                    label: "Discord Verification",
                    translations: {
                      pl: "Weryfikacja Discord",
                      ru: "Верификация Discord",
                      de: "VTC-Discord-Server-Verifizierung",
                    },
                  },
                  {
                    slug: "web-docs/vtc/visibility",
                    label: "Visibility",
                    translations: {
                      pl: "Widoczność",
                      ru: "Видимость",
                    },
                  },
                  {
                    slug: "web-docs/vtc/sister-companies",
                    label: "Sister Companies",
                    translations: {
                      ru: "Родственные компании",
                    },
                  },
                  {
                    slug: "web-docs/vtc/partnerships",
                    label: "Partnerships",
                    translations: {
                      ru: "Партнёрства",
                    },
                  },
                  {
                    slug: "web-docs/vtc/activity-log",
                    label: "Activity Log",
                    translations: {
                      ru: "Журнал активности",
                    },
                  },
                  {
                    slug: "web-docs/vtc/analytics",
                    label: "Analytics",
                    translations: {
                      ru: "Аналитика",
                    },
                  },
                  {
                    slug: "web-docs/vtc/support-tickets",
                    label: "Support Tickets",
                    translations: {
                      ru: "Тикеты поддержки",
                    },
                  },
                  {
                    slug: "web-docs/vtc/disbanding",
                    label: "Disbanding a VTC",
                    translations: {
                      ru: "Расформирование VTC",
                    },
                  },
                ],
              },
              {
                label: "Discord Bot",
                translations: {
                  pl: "Bot Discord",
                  ru: "Бот Discord",
                },
                collapsed: false,
                items: [
                  {
                    slug: "web-docs/discord-bot/connection-flows",
                    label: "Connection Flows",
                    translations: {
                      ru: "Варианты подключения Discord",
                    },
                  },
                  {
                    slug: "web-docs/discord-bot/linked-roles",
                    label: "Linked Roles",
                    translations: {
                      pl: "Połączone Role",
                      ru: "Привязанные Роли",
                    },
                  },
                  {
                    slug: "web-docs/discord-bot/notifications",
                    label: "Discord Notifications",
                    translations: {
                      ru: "Уведомления Discord",
                    },
                  },
                  {
                    slug: "web-docs/discord-bot/official-server",
                    label: "Official Discord Server",
                    translations: {
                      ru: "Официальный сервер Discord",
                    },
                  },
                ],
              },
              {
                label: "Account Guides",
                translations: {
                  ru: "Руководства по учетным записям",
                },
                collapsed: false,
                items: [
                  {
                    slug: "web-docs/account/profile-settings",
                    label: "Profile Settings",
                    translations: {
                      pl: "Ustawienia Profilu",
                      ru: "Настройки профиля",
                      de: "Profileinstellungen",
                    },
                  },
                  {
                    slug: "web-docs/account/public-profile",
                    label: "Public Profile",
                    translations: {
                      ru: "Публичный профиль",
                    },
                  },
                  {
                    slug: "web-docs/account/user-directory",
                    label: "User Directory",
                    translations: {
                      ru: "Каталог пользователей",
                    },
                  },
                  {
                    slug: "web-docs/account/security",
                    label: "Account Security",
                    translations: {
                      pl: "Bezpieczeństwo Konta",
                      ru: "Безопасность аккаунта",
                      de: "Kontosicherheit",
                    },
                  },
                  {
                    slug: "web-docs/account/connections",
                    label: "Connections",
                    translations: {
                      pl: "Połączenia",
                      ru: "Подключённые аккаунты",
                    },
                  },
                  {
                    slug: "web-docs/account/regional-timezone",
                    label: "Regional & Timezone",
                    translations: {
                      ru: "Регион и часовой пояс",
                    },
                  },
                  {
                    slug: "web-docs/account/notifications",
                    label: "Notifications",
                    translations: {
                      ru: "Уведомления",
                    },
                  },
                  {
                    slug: "web-docs/account/appearance-preferences",
                    label: "Appearance & Preferences",
                    translations: {
                      pl: "Wygląd i Preferencje",
                      ru: "Внешний вид и предпочтения",
                    },
                  },
                  {
                    slug: "web-docs/account/onboarding",
                    label: "Onboarding Tour",
                    translations: {
                      ru: "Ознакомительный тур",
                    },
                  },
                  {
                    slug: "web-docs/account/supporter",
                    label: "Supporter & Premium",
                    translations: {
                      ru: "Спонсор и Премиум",
                    },
                  },
                  {
                    slug: "web-docs/account/forum",
                    label: "Forum",
                    translations: {
                      ru: "Форум",
                    },
                  },
                  {
                    slug: "web-docs/account/support-tickets",
                    label: "Support Tickets",
                    translations: {
                      ru: "Тикеты поддержки",
                    },
                  },
                  {
                    slug: "web-docs/account/bans-appeals",
                    label: "Bans & Appeals",
                    translations: {
                      ru: "Баны и апелляции",
                    },
                  },
                  {
                    slug: "web-docs/account/standing-licence",
                    label: "Standing & Driver Licence",
                    translations: {
                      ru: "Репутация и водительские права",
                    },
                  },
                  {
                    slug: "web-docs/account/deletion",
                    label: "Account Deletion",
                    translations: {
                      pl: "Usunięcie Konta",
                      ru: "Удаление аккаунта",
                    },
                  },
                ],
              },
              {
                label: "Platform Guides",
                translations: {
                  ru: "Руководства по платформе",
                },
                collapsed: false,
                items: [
                  {
                    slug: "web-docs/platform/news",
                    label: "Platform News",
                    translations: {
                      ru: "Новости платформы",
                    },
                  },
                  {
                    slug: "web-docs/platform/polls",
                    label: "Community Polls",
                    translations: {
                      ru: "Опросы сообщества",
                    },
                  },
                  {
                    slug: "web-docs/platform/programs",
                    label: "Programs & Recognition",
                    translations: {
                      ru: "Программы и признание",
                    },
                  },
                  {
                    slug: "web-docs/platform/changelog-status",
                    label: "Status & Changelog",
                    translations: {
                      ru: "Статус и список изменений",
                    },
                  },
                ],
              },
              {
                label: "Contribute",
                translations: {
                  ru: "Внесите вклад",
                },
                collapsed: false,
                items: [
                  {
                    slug: "web-docs/contribute/contributors",
                    label: "Contributors",
                    translations: {
                      pl: "Współtwórcy",
                      ru: "Участники",
                    },
                  },
                  {
                    slug: "web-docs/contribute/contributing",
                    label: "Translate Documentation",
                    translations: {
                      pl: "Tłumacz Dokumentację",
                      ru: "Перевод документации",
                    },
                  },
                  {
                    slug: "web-docs/contribute/translation-status",
                    label: "Translation Status",
                    translations: {
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
              ru: "Веб API",
            },
            link: "web-api/overview",
            icon: "setting",
            items: [
              {
                label: "Getting Started",
                translations: {
                  ru: "Начало работы",
                },
                collapsed: false,
                items: [
                  {
                    slug: "web-api/overview",
                    label: "Platform Overview",
                    translations: {
                      ru: "Обзор платформы",
                    },
                  },
                  {
                    slug: "web-api/console",
                    label: "Developer Console",
                    translations: {
                      ru: "Консоль разработчика",
                    },
                  },
                ],
              },
              {
                label: "Public API",
                translations: {
                  ru: "Публичный API",
                },
                collapsed: false,
                items: [
                  {
                    slug: "web-api/public-api",
                    label: "Public API",
                    translations: {
                      ru: "Публичный API",
                    },
                  },
                  {
                    slug: "web-api/public-api/doc",
                    label: "Doc",
                    translations: {
                      ru: "Справочник",
                    },
                  },
                  {
                    slug: "web-api/leaked-secrets",
                    label: "Leaked API Keys & Secrets",
                    translations: {
                      ru: "Утечка API-ключей и секретов",
                    },
                  },
                ],
              },
              {
                label: "TypeScript SDK",
                translations: {
                  ru: "TypeScript SDK",
                },
                collapsed: false,
                items: [
                  {
                    slug: "web-api/sdk",
                    label: "TypeScript SDK",
                    translations: {
                      ru: "TypeScript SDK",
                    },
                  },
                  {
                    slug: "web-api/sdk-contributing",
                    label: "Contributing to the SDK",
                    translations: {
                      ru: "Вклад в SDK",
                    },
                  },
                  {
                    slug: "web-api/i18n-translations",
                    label: "i18n & Translations",
                    translations: {
                      ru: "Локализация и переводы",
                    },
                  },
                ],
              },
              {
                label: "Integrations",
                translations: {
                  ru: "Интеграции",
                },
                collapsed: false,
                items: [
                  {
                    slug: "web-api/oauth-apps",
                    label: "OAuth Apps",
                    translations: {
                      ru: "Приложения OAuth",
                    },
                  },
                  {
                    slug: "web-api/webhooks",
                    label: "Webhooks",
                    translations: {
                      ru: "Вебхуки",
                    },
                  },
                ],
              },
            ],
          },
          {
            label: "Game Docs",
            link: "game-docs",
            icon: "seti:asm",
            items: [
              {
                label: "Game Docs",
                collapsed: false,
                items: [{ slug: "game-docs", label: "Overview" }],
              },
            ],
          },
          {
            label: "Game SDK",
            link: "game-sdk",
            icon: "puzzle",
            items: [
              {
                label: "Game SDK",
                collapsed: false,
                items: [{ slug: "game-sdk", label: "Overview" }],
              },
            ],
          },
        ]),
      ],
    }),
  ],
});
