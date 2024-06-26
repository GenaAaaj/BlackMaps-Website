import Pathname from "../components/Pathname"
const i18nNamespaces = ['notfound'];
import initTranslations from '../../i18n';

export async function generateMetadata({ params: { locale } }) {
    const { t } = await initTranslations(locale, i18nNamespaces);
    return {
        title: 'Black Maps | ' + t('meta_title'),
        description: t('meta_description'),
        openGraph: {
            title: 'Black Maps | ' + t('meta_title'),
            description: t('meta_description'),
            images: "https://blackmaps.com.ar/image/og-nf.png",
        },
        twitter: {
            card: "summary_large_image",
            title: 'Black Maps | ' + t('meta_title'),
            description: t('meta_description'),
            creator: "@maps_black",
            creatorId: "1274191176267071490",
            images: ["https://blackmaps.com.ar/image/og-nf.png"],
        },
    };
}

export default async function NotFoundPage({ params: { locale } }) {
    const { t } = await initTranslations(locale, i18nNamespaces);
    return (
        <main className="h-screen pt-20 flex flex-col items-center justify-center p-4">
            <div className="404 shadow-xl dark:bg-[#1d1d1d] bg-[#ddd] flex border rounded-xl p-2 border-white/40">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-18 w-16 border-r-2 p-3 text-red-400" viewBox="0 0 24 24" fill="currentColor"><path d="M11.953 2C6.465 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.493 2 11.953 2zM13 17h-2v-2h2v2zm0-4h-2V7h2v6z"></path></svg>
                <div className="flex flex-col justify-center px-2">
                    <h2 className="text-xs opacity-60">Error: 404</h2>
                    <h1 className="flex flex-wrap text-xl">{t('error_title')} &quot;<Pathname/>&quot;</h1>
                    <h3 className="text-xs opacity-60">BlackMaps Website by <a href="https://www.linkedin.com/in/genadev">GenaDev</a></h3>
                </div>
            </div>
        </main>
    )
}
