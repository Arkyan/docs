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
              fr: "Documentation Web",
            },
            link: "web-docs/vtc/creating",
            icon: "open-book",
            items: [
              {
                label: "VTC Programs",
                translations: {
                  ru: "Программы VTC",
                  de: "VTC Programme",
                  fr: "Programmes VTC",
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
                      fr: "Programme des VTC Vérifiées",
                    },
                  },
                  {
                    slug: "web-docs/vtc-programs/discord-role",
                    label: "Verified VTC Discord Role",
                    translations: {
                      pl: "Rola Discord Zweryfikowanego VTC",
                      ru: "Роль Discord верифицированного VTC",
                      de: "Verifizierte VTC-Discord-Rolle",
                      fr: "Rôle Discord VTC Vérifiée",
                    },
                  },
                  {
                    slug: "web-docs/vtc-programs/partnered",
                    label: "Partnered VTC Program",
                    translations: {
                      pl: "Partnerski Program VTC",
                      ru: "Партнёрская программа VTC",
                      de: "Partner-VTC-Programm",
                      fr: "Programme des VTC Partenaires",
                    },
                  },
                  {
                    slug: "web-docs/vtc-programs/livery-guidelines",
                    label: "VTC Livery Guidelines",
                    translations: {
                      pl: "Wytyczne Malowania VTC",
                      ru: "Правила оформления окрасок VTC",
                      de: "VTC-Lackierungsrichtlinien",
                      fr: "Directives de livrée VTC",
                    },
                  },
                ],
              },
              {
                label: "VTC Guides",
                translations: {
                  ru: "Руководства по VTC",
                  fr: "Guides VTC",
                },
                collapsed: false,
                items: [
                  {
                    slug: "web-docs/vtc/creating",
                    label: "Creating a VTC",
                    translations: {
                      ru: "Создание VTC",
                      fr: "Créer une VTC",
                    },
                  },
                  {
                    slug: "web-docs/vtc/directory",
                    label: "VTC Directory",
                    translations: {
                      ru: "Каталог VTC",
                      fr: "Annuaire VTC",
                    },
                  },
                  {
                    slug: "web-docs/vtc/general-settings",
                    label: "General Settings",
                    translations: {
                      pl: "Ustawienia Ogólne",
                      ru: "Общие настройки",
                      de: "Allgemeine VTC-Einstellungen",
                      fr: "Paramètres généraux",
                    },
                  },
                  {
                    slug: "web-docs/vtc/appearance",
                    label: "Appearance",
                    translations: {
                      ru: "Оформление",
                      fr: "Apparence",
                    },
                  },
                  {
                    slug: "web-docs/vtc/member-activity",
                    label: "Member Activity",
                    translations: {
                      ru: "Активность участников",
                      fr: "Activité des membres",
                    },
                  },
                  {
                    slug: "web-docs/vtc/roles-permissions",
                    label: "Roles & Permissions",
                    translations: {
                      pl: "Role i Uprawnienia",
                      ru: "Роли и права доступа",
                      fr: "Rôles et permissions",
                    },
                  },
                  {
                    slug: "web-docs/vtc/member-management",
                    label: "Member Management",
                    translations: {
                      pl: "Zarządzanie Członkami",
                      ru: "Управление участниками",
                      fr: "Gestion des membres",
                    },
                  },
                  {
                    slug: "web-docs/vtc/recruitment",
                    label: "Recruitment",
                    translations: {
                      pl: "Rekrutacja",
                      ru: "Набор участников",
                      fr: "Recrutement",
                    },
                  },
                  {
                    slug: "web-docs/vtc/events",
                    label: "Events",
                    translations: {
                      ru: "Мероприятия",
                      fr: "Événements",
                    },
                  },
                  {
                    slug: "web-docs/vtc/integrations",
                    label: "Integrations",
                    translations: {
                      ru: "Интеграции",
                      fr: "Intégrations",
                    },
                  },
                  {
                    slug: "web-docs/vtc/news",
                    label: "News",
                    translations: {
                      ru: "Новости",
                      fr: "Actualités",
                    },
                  },
                  {
                    slug: "web-docs/vtc/gallery",
                    label: "Gallery",
                    translations: {
                      ru: "Галерея",
                      fr: "Galerie",
                    },
                  },
                  {
                    slug: "web-docs/vtc/announcements",
                    label: "Announcements",
                    translations: {
                      pl: "Ogłoszenia",
                      ru: "Уведомления",
                      fr: "Annonces",
                    },
                  },
                  {
                    slug: "web-docs/vtc/discord-verification",
                    label: "Discord Verification",
                    translations: {
                      pl: "Weryfikacja Discord",
                      ru: "Верификация Discord",
                      de: "VTC-Discord-Server-Verifizierung",
                      fr: "Vérification Discord",
                    },
                  },
                  {
                    slug: "web-docs/vtc/visibility",
                    label: "Visibility",
                    translations: {
                      pl: "Widoczność",
                      ru: "Видимость",
                      fr: "Visibilité",
                    },
                  },
                  {
                    slug: "web-docs/vtc/sister-companies",
                    label: "Sister Companies",
                    translations: {
                      ru: "Родственные компании",
                      fr: "Entreprises sœurs",
                    },
                  },
                  {
                    slug: "web-docs/vtc/partnerships",
                    label: "Partnerships",
                    translations: {
                      ru: "Партнёрства",
                      fr: "Partenariats",
                    },
                  },
                  {
                    slug: "web-docs/vtc/activity-log",
                    label: "Activity Log",
                    translations: {
                      ru: "Журнал активности",
                      fr: "Journal d'activité",
                    },
                  },
                  {
                    slug: "web-docs/vtc/analytics",
                    label: "Analytics",
                    translations: {
                      ru: "Аналитика",
                      fr: "Statistiques",
                    },
                  },
                  {
                    slug: "web-docs/vtc/support-tickets",
                    label: "Support Tickets",
                    translations: {
                      ru: "Тикеты поддержки",
                      fr: "Tickets de support",
                    },
                  },
                  {
                    slug: "web-docs/vtc/disbanding",
                    label: "Disbanding a VTC",
                    translations: {
                      ru: "Расформирование VTC",
                      fr: "Dissoudre une VTC",
                    },
                  },
                ],
              },
              {
                label: "Discord Bot",
                translations: {
                  pl: "Bot Discord",
                  ru: "Бот Discord",
                  fr: "Bot Discord",
                },
                collapsed: false,
                items: [
                  {
                    slug: "web-docs/discord-bot/connection-flows",
                    label: "Connection Flows",
                    translations: {
                      ru: "Варианты подключения Discord",
                      fr: "Flux de connexion",
                    },
                  },
                  {
                    slug: "web-docs/discord-bot/linked-roles",
                    label: "Linked Roles",
                    translations: {
                      pl: "Połączone Role",
                      ru: "Привязанные Роли",
                      fr: "Rôles liés",
                    },
                  },
                  {
                    slug: "web-docs/discord-bot/notifications",
                    label: "Discord Notifications",
                    translations: {
                      ru: "Уведомления Discord",
                      fr: "Notifications Discord",
                    },
                  },
                  {
                    slug: "web-docs/discord-bot/official-server",
                    label: "Official Discord Server",
                    translations: {
                      ru: "Официальный сервер Discord",
                      fr: "Serveur Discord officiel",
                    },
                  },
                ],
              },
              {
                label: "Account Guides",
                translations: {
                  ru: "Руководства по учетным записям",
                  fr: "Guides de compte",
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
                      fr: "Paramètres du profil",
                    },
                  },
                  {
                    slug: "web-docs/account/public-profile",
                    label: "Public Profile",
                    translations: {
                      ru: "Публичный профиль",
                      fr: "Profil public",
                    },
                  },
                  {
                    slug: "web-docs/account/user-directory",
                    label: "User Directory",
                    translations: {
                      ru: "Каталог пользователей",
                      fr: "Annuaire des utilisateurs",
                    },
                  },
                  {
                    slug: "web-docs/account/security",
                    label: "Account Security",
                    translations: {
                      pl: "Bezpieczeństwo Konta",
                      ru: "Безопасность аккаунта",
                      de: "Kontosicherheit",
                      fr: "Sécurité du compte",
                    },
                  },
                  {
                    slug: "web-docs/account/connections",
                    label: "Connections",
                    translations: {
                      pl: "Połączenia",
                      ru: "Подключённые аккаунты",
                      fr: "Connexions",
                    },
                  },
                  {
                    slug: "web-docs/account/regional-timezone",
                    label: "Regional & Timezone",
                    translations: {
                      ru: "Регион и часовой пояс",
                      fr: "Région et fuseau horaire",
                    },
                  },
                  {
                    slug: "web-docs/account/notifications",
                    label: "Notifications",
                    translations: {
                      ru: "Уведомления",
                      fr: "Notifications",
                    },
                  },
                  {
                    slug: "web-docs/account/appearance-preferences",
                    label: "Appearance & Preferences",
                    translations: {
                      pl: "Wygląd i Preferencje",
                      ru: "Внешний вид и предпочтения",
                      fr: "Apparence et préférences",
                    },
                  },
                  {
                    slug: "web-docs/account/onboarding",
                    label: "Onboarding Tour",
                    translations: {
                      ru: "Ознакомительный тур",
                      fr: "Visite guidée",
                    },
                  },
                  {
                    slug: "web-docs/account/supporter",
                    label: "Supporter & Premium",
                    translations: {
                      ru: "Спонсор и Премиум",
                      fr: "Supporter et Premium",
                    },
                  },
                  {
                    slug: "web-docs/account/forum",
                    label: "Forum",
                    translations: {
                      ru: "Форум",
                      fr: "Forum",
                    },
                  },
                  {
                    slug: "web-docs/account/support-tickets",
                    label: "Support Tickets",
                    translations: {
                      ru: "Тикеты поддержки",
                      fr: "Tickets de support",
                    },
                  },
                  {
                    slug: "web-docs/account/bans-appeals",
                    label: "Bans & Appeals",
                    translations: {
                      ru: "Баны и апелляции",
                      fr: "Bans et appels",
                    },
                  },
                  {
                    slug: "web-docs/account/standing-licence",
                    label: "Standing & Driver Licence",
                    translations: {
                      ru: "Репутация и водительские права",
                      fr: "Réputation et permis de conduite",
                    },
                  },
                  {
                    slug: "web-docs/account/deletion",
                    label: "Account Deletion",
                    translations: {
                      pl: "Usunięcie Konta",
                      ru: "Удаление аккаунта",
                      fr: "Suppression du compte",
                    },
                  },
                ],
              },
              {
                label: "Platform Guides",
                translations: {
                  ru: "Руководства по платформе",
                  fr: "Guides de la plateforme",
                },
                collapsed: false,
                items: [
                  {
                    slug: "web-docs/platform/news",
                    label: "Platform News",
                    translations: {
                      ru: "Новости платформы",
                      fr: "Actualités de la plateforme",
                    },
                  },
                  {
                    slug: "web-docs/platform/polls",
                    label: "Community Polls",
                    translations: {
                      ru: "Опросы сообщества",
                      fr: "Sondages communautaires",
                    },
                  },
                  {
                    slug: "web-docs/platform/programs",
                    label: "Programs & Recognition",
                    translations: {
                      ru: "Программы и признание",
                      fr: "Programmes et reconnaissance",
                    },
                  },
                  {
                    slug: "web-docs/platform/changelog-status",
                    label: "Status & Changelog",
                    translations: {
                      ru: "Статус и список изменений",
                      fr: "Statut et journal des modifications",
                    },
                  },
                ],
              },
              {
                label: "Contribute",
                translations: {
                  ru: "Внесите вклад",
                  fr: "Contribuer",
                },
                collapsed: false,
                items: [
                  {
                    slug: "web-docs/contribute/contributors",
                    label: "Contributors",
                    translations: {
                      pl: "Współtwórcy",
                      ru: "Участники",
                      fr: "Contributeurs",
                    },
                  },
                  {
                    slug: "web-docs/contribute/contributing",
                    label: "Translate Documentation",
                    translations: {
                      pl: "Tłumacz Dokumentację",
                      ru: "Перевод документации",
                      fr: "Traduire la documentation",
                    },
                  },
                  {
                    slug: "web-docs/contribute/translation-status",
                    label: "Translation Status",
                    translations: {
                      ru: "Статус перевода",
                      fr: "Statut des traductions",
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
              fr: "API Web",
            },
            link: "web-api/overview",
            icon: "setting",
            items: [
              {
                label: "Getting Started",
                translations: {
                  ru: "Начало работы",
                  fr: "Démarrage",
                },
                collapsed: false,
                items: [
                  {
                    slug: "web-api/overview",
                    label: "Platform Overview",
                    translations: {
                      ru: "Обзор платформы",
                      fr: "Vue d'ensemble de la plateforme",
                    },
                  },
                  {
                    slug: "web-api/console",
                    label: "Developer Console",
                    translations: {
                      ru: "Консоль разработчика",
                      fr: "Console développeur",
                    },
                  },
                ],
              },
              {
                label: "Public API",
                translations: {
                  ru: "Публичный API",
                  fr: "API publique",
                },
                collapsed: false,
                items: [
                  {
                    slug: "web-api/public-api",
                    label: "Public API",
                    translations: {
                      ru: "Публичный API",
                      fr: "API publique",
                    },
                  },
                  {
                    slug: "web-api/public-api/doc",
                    label: "Doc",
                    translations: {
                      ru: "Справочник",
                      fr: "Référence",
                    },
                  },
                  {
                    slug: "web-api/leaked-secrets",
                    label: "Leaked API Keys & Secrets",
                    translations: {
                      ru: "Утечка API-ключей и секретов",
                      fr: "Clés API et secrets exposés",
                    },
                  },
                ],
              },
              {
                label: "TypeScript SDK",
                translations: {
                  ru: "TypeScript SDK",
                  fr: "SDK TypeScript",
                },
                collapsed: false,
                items: [
                  {
                    slug: "web-api/sdk",
                    label: "TypeScript SDK",
                    translations: {
                      ru: "TypeScript SDK",
                      fr: "SDK TypeScript",
                    },
                  },
                  {
                    slug: "web-api/sdk-contributing",
                    label: "Contributing to the SDK",
                    translations: {
                      ru: "Вклад в SDK",
                      fr: "Contribuer au SDK",
                    },
                  },
                  {
                    slug: "web-api/i18n-translations",
                    label: "i18n & Translations",
                    translations: {
                      ru: "Локализация и переводы",
                      fr: "i18n et traductions",
                    },
                  },
                ],
              },
              {
                label: "Integrations",
                translations: {
                  ru: "Интеграции",
                  fr: "Intégrations",
                },
                collapsed: false,
                items: [
                  {
                    slug: "web-api/oauth-apps",
                    label: "OAuth Apps",
                    translations: {
                      ru: "Приложения OAuth",
                      fr: "Applications OAuth",
                    },
                  },
                  {
                    slug: "web-api/webhooks",
                    label: "Webhooks",
                    translations: {
                      ru: "Вебхуки",
                      fr: "Webhooks",
                    },
                  },
                ],
              },
            ],
          },
          {
            label: "Game Docs",
            translations: {
              fr: "Documentation du jeu",
            },
            link: "game-docs",
            icon: "seti:asm",
            items: [
              {
                label: "Game Docs",
                translations: {
                  fr: "Documentation du jeu",
                },
                collapsed: false,
                items: [
                  {
                    slug: "game-docs",
                    label: "Overview",
                    translations: {
                      fr: "Vue d'ensemble",
                    },
                  },
                ],
              },
            ],
          },
          {
            label: "Game SDK",
            translations: {
              fr: "SDK du jeu",
            },
            link: "game-sdk",
            icon: "puzzle",
            items: [
              {
                label: "Game SDK",
                translations: {
                  fr: "SDK du jeu",
                },
                collapsed: false,
                items: [
                  {
                    slug: "game-sdk",
                    label: "Overview",
                    translations: {
                      fr: "Vue d'ensemble",
                    },
                  },
                ],
              },
            ],
          },
        ]),
      ],
    }),
  ],
});
