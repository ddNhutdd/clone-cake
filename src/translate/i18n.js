import i18n from 'i18next';
import Backend from 'i18next-http-backend';
import { initReactI18next } from 'react-i18next';

import VItranslate from './locales/VItranslation.json';
import Entranslate from './locales/ENtranslation.json';

export const availableLanguage = {
	vi: 'vi',
};

export const languageList = [
	{
		id: 1,
		content: 'العربية',
	},
	{
		id: 2,
		content: 'বাংলা',
	},
	{
		id: 3,
		content: 'English',
	},
	{
		id: 4,
		content: 'Deutsch',
	},
	{
		id: 5,
		content: 'Ελληνικά',
	},
	{
		id: 6,
		content: 'Español',
	},
	{
		id: 7,
		content: 'Suomalainen',
	},
	{
		id: 8,
		content: 'Filipino',
	},
	{
		id: 9,
		content: 'Français',
	},
	{
		id: 10,
		content: 'हिंदी',
	},
	{
		id: 11,
		content: 'Magyar',
	},
	{
		id: 12,
		content: 'Bahasa Indonesia',
	},
	{
		id: 13,
		content: 'Italiano',
	},
	{
		id: 14,
		content: '日本語',
	},
	{
		id: 15,
		content: '한국어',
	},
	{
		id: 16,
		content: 'Nederlands',
	},
	{
		id: 17,
		content: 'Polski',
	},
	{
		id: 18,
		content: 'Português (Brazil)',
	},
	{
		id: 19,
		content: 'Português',
	},
	{
		id: 20,
		content: 'Română',
	},
	{
		id: 21,
		content: 'Русский',
	},
	{
		id: 22,
		content: 'Svenska',
	},
	{
		id: 23,
		content: 'தமிழ்',
	},
	{
		id: 24,
		content: 'Türkçe',
	},
	{
		id: 25,
		content: 'Українська',
	},
	{
		id: 26,
		content: 'Tiếng Việt',
	},
	{
		id: 27,
		content: '简体中文',
	},
	{
		id: 28,
		content: '繁體中文',
	},
];

const resources = {
	vi: {
		translation: VItranslate,
	},
	en: {
		translation: Entranslate,
	},
};

i18n.use(Backend)
	.use(initReactI18next)
	.init({
		resources,
		fallbackLng: availableLanguage.en,
		interpolation: {
			escapeValue: false,
		},
	});

export default i18n;
