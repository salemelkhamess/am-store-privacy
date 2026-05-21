export default function PrivacyPage() {
    const sections = [
        {
            title: "Création de compte",
            content:
                "Lorsque vous créez un compte AM STORE, nous pouvons collecter certaines informations comme votre nom, numéro de téléphone et informations de connexion afin de sécuriser votre compte et améliorer votre expérience.",
        },
        {
            title: "Navigation et recherche de produits",
            content:
                "Notre plateforme permet aux utilisateurs de parcourir les produits, rechercher des articles et filtrer les résultats par catégories afin de trouver rapidement les produits souhaités.",
        },
        {
            title: "Commandes et historique",
            content:
                "AM STORE enregistre les informations relatives aux commandes afin de permettre le suivi des achats, l’affichage de l’historique des commandes et l’amélioration de nos services.",
        },

        {
            title: "Protection des données",
            content:
                "Nous appliquons des standards de sécurité modernes afin de garantir la confidentialité des données personnelles et des activités réalisées sur la plateforme.",
        },
        {
            title: "Notifications et communications",
            content:
                "AM STORE peut envoyer des notifications concernant les commandes, mises à jour de compte, promotions ou nouvelles fonctionnalités de la plateforme.",
        },
        {
            title: "Vos droits",
            content:
                "Les utilisateurs peuvent demander la modification ou la suppression de leurs données personnelles conformément aux lois applicables sur la confidentialité.",
        },
    ];

    return (
        <main className="min-h-screen bg-gradient-to-br from-green-950 via-black to-emerald-950 text-white overflow-hidden">

            {/* Background Effects */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-0 left-0 w-96 h-96 bg-green-500/20 rounded-full blur-3xl"></div>
                <div className="absolute bottom-0 right-0 w-96 h-96 bg-emerald-500/20 rounded-full blur-3xl"></div>
            </div>

            <div className="relative z-10 max-w-6xl mx-auto px-6 py-16">

                {/* Hero Section */}
                <div className="text-center mb-20">

                    <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full border border-green-400/20 bg-green-500/10 backdrop-blur-md mb-8">
                        <div className="w-3 h-3 rounded-full bg-green-400 animate-pulse"></div>
                        <span className="text-green-300 text-sm tracking-wider uppercase">
              AM STORE • Online Shopping Platform
            </span>
                    </div>

                    <h1 className="text-6xl md:text-7xl font-black mb-8 leading-tight">
                        Privacy
                        <span className="block bg-gradient-to-r from-green-400 to-emerald-300 bg-clip-text text-transparent">
              Policy
            </span>
                    </h1>

                    <p className="max-w-3xl mx-auto text-gray-300 text-xl leading-9">
                        Chez AM STORE, nous accordons une grande importance à la protection
                        des données personnelles et à la confidentialité de nos utilisateurs.
                        Cette politique explique comment les informations sont collectées,
                        utilisées et protégées lors de l’utilisation de notre plateforme
                        de shopping en ligne.
                    </p>

                </div>

                {/* Features Cards */}
                <div className="grid md:grid-cols-4 gap-6 mb-20">

                    <div className="rounded-3xl border border-green-500/10 bg-white/5 backdrop-blur-xl p-6 hover:bg-white/10 transition-all duration-300">
                        <div className="text-4xl mb-4">🛍️</div>
                        <h3 className="text-xl font-bold mb-3 text-green-300">
                            Shopping
                        </h3>
                        <p className="text-gray-400 leading-7">
                            Parcourez des milliers de produits et catégories.
                        </p>
                    </div>

                    <div className="rounded-3xl border border-green-500/10 bg-white/5 backdrop-blur-xl p-6 hover:bg-white/10 transition-all duration-300">
                        <div className="text-4xl mb-4">🔍</div>
                        <h3 className="text-xl font-bold mb-3 text-green-300">
                            Recherche & Filtres
                        </h3>
                        <p className="text-gray-400 leading-7">
                            Trouvez rapidement vos produits grâce aux filtres intelligents.
                        </p>
                    </div>

                    <div className="rounded-3xl border border-green-500/10 bg-white/5 backdrop-blur-xl p-6 hover:bg-white/10 transition-all duration-300">
                        <div className="text-4xl mb-4">📦</div>
                        <h3 className="text-xl font-bold mb-3 text-green-300">
                            Commandes
                        </h3>
                        <p className="text-gray-400 leading-7">
                            Gérez vos achats et consultez votre historique de commandes.
                        </p>
                    </div>

                    <div className="rounded-3xl border border-green-500/10 bg-white/5 backdrop-blur-xl p-6 hover:bg-white/10 transition-all duration-300">
                        <div className="text-4xl mb-4">🔒</div>
                        <h3 className="text-xl font-bold mb-3 text-green-300">
                            Sécurité
                        </h3>
                        <p className="text-gray-400 leading-7">
                            Vos données sont protégées avec des standards modernes.
                        </p>
                    </div>

                </div>

                {/* Privacy Sections */}
                <div className="space-y-8">

                    {sections.map((section, index) => (
                        <div
                            key={index}
                            className="group relative overflow-hidden rounded-[30px] border border-green-500/10 bg-white/5 backdrop-blur-xl p-10 hover:border-green-400/30 hover:bg-white/10 transition-all duration-500"
                        >

                            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-r from-green-500/5 to-emerald-500/5"></div>

                            <div className="relative z-10">

                                <div className="flex items-center gap-5 mb-6">
                                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-r from-green-500 to-emerald-400 flex items-center justify-center text-black font-black text-xl shadow-lg shadow-green-500/20">
                                        {index + 1}
                                    </div>

                                    <h2 className="text-3xl font-bold text-green-300">
                                        {section.title}
                                    </h2>
                                </div>

                                <p className="text-gray-300 leading-9 text-lg">
                                    {section.content}
                                </p>

                            </div>

                        </div>
                    ))}

                </div>

                {/* Footer */}
                <div className="mt-24 text-center">

                    <div className="rounded-[35px] border border-green-500/10 bg-white/5 backdrop-blur-xl p-10">

                        <h2 className="text-4xl font-black mb-6 bg-gradient-to-r from-green-400 to-emerald-300 bg-clip-text text-transparent">
                            AM STORE
                        </h2>

                        <p className="max-w-2xl mx-auto text-gray-400 leading-8 mb-8">
                            Merci de faire confiance à AM STORE pour vos achats en ligne.
                            Nous travaillons continuellement afin d’assurer une expérience
                            sécurisée, rapide et moderne pour tous nos utilisateurs.
                        </p>

                        <div className="flex flex-wrap justify-center gap-4">

                            <div className="px-5 py-3 rounded-full bg-green-500/10 border border-green-500/20 text-green-300">
                                Secure Shopping
                            </div>

                            <div className="px-5 py-3 rounded-full bg-green-500/10 border border-green-500/20 text-green-300">
                                Fast Orders
                            </div>

                            <div className="px-5 py-3 rounded-full bg-green-500/10 border border-green-500/20 text-green-300">
                                Protected Data
                            </div>

                        </div>

                        <div className="mt-10 text-gray-500 text-sm">
                            © 2026 AM STORE. All rights reserved.
                        </div>

                    </div>

                </div>

            </div>
        </main>
    );
}