export default function SupportPage() {
    const faqs = [
        {
            icon: "📦",
            title: "Suivi de commande",
            content:
                "Pour suivre votre commande, rendez-vous dans la section « Mes commandes » de votre application AM STORE. Vous y trouverez le statut en temps réel de chaque livraison.",
        },
        {
            icon: "↩️",
            title: "Retours et remboursements",
            content:
                "Vous pouvez demander un retour dans les 7 jours suivant la réception de votre commande. Contactez notre équipe via l'application pour initier la procédure de retour.",
        },
        {
            icon: "🔑",
            title: "Problème de connexion",
            content:
                "Si vous rencontrez des difficultés à vous connecter, utilisez la fonction « Mot de passe oublié » sur l'écran de connexion. Un lien de réinitialisation vous sera envoyé immédiatement.",
        },
        {
            icon: "🏪",
            title: "Compte et profil",
            content:
                "Pour modifier vos informations personnelles, accédez à « Mon Profil » dans l'application. Vous pouvez mettre à jour votre nom, numéro de téléphone et adresse de livraison.",
        },
        {
            icon: "🔔",
            title: "Notifications",
            content:
                "Gérez vos préférences de notifications directement depuis les paramètres de l'application. Vous pouvez activer ou désactiver les alertes de commandes et promotions.",
        },
    ];

    return (
        <main className="min-h-screen bg-gradient-to-br from-green-950 via-black to-emerald-950 text-white overflow-hidden">

            {/* Background Effects */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-0 left-0 w-96 h-96 bg-green-500/20 rounded-full blur-3xl"></div>
                <div className="absolute bottom-0 right-0 w-96 h-96 bg-emerald-500/20 rounded-full blur-3xl"></div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-green-400/10 rounded-full blur-3xl"></div>
            </div>

            <div className="relative z-10 max-w-6xl mx-auto px-6 py-16">

                {/* Hero Section */}
                <div className="text-center mb-20">

                    <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full border border-green-400/20 bg-green-500/10 backdrop-blur-md mb-8">
                        <div className="w-3 h-3 rounded-full bg-green-400 animate-pulse"></div>
                        <span className="text-green-300 text-sm tracking-wider uppercase">
                            AM STORE • Support Client
                        </span>
                    </div>

                    <h1 className="text-6xl md:text-7xl font-black mb-8 leading-tight">
                        Centre
                        <span className="block bg-gradient-to-r from-green-400 to-emerald-300 bg-clip-text text-transparent">
                            d'Aide
                        </span>
                    </h1>

                    <p className="max-w-3xl mx-auto text-gray-300 text-xl leading-9">
                        Notre équipe support est disponible pour vous aider. Consultez les
                        questions fréquentes ci-dessous ou contactez-nous directement via
                        l'application AM STORE.
                    </p>

                </div>

                {/* Contact Cards */}
                <div className="grid md:grid-cols-3 gap-6 mb-20">

                    <div className="rounded-3xl border border-green-500/10 bg-white/5 backdrop-blur-xl p-6 hover:bg-white/10 transition-all duration-300 text-center">
                        <div className="text-4xl mb-4">📱</div>
                        <h3 className="text-xl font-bold mb-3 text-green-300">Application</h3>
                        <p className="text-gray-400 leading-7">
                            Contactez-nous directement depuis l'app AM STORE.
                        </p>
                    </div>

                    <div className="rounded-3xl border border-green-500/10 bg-white/5 backdrop-blur-xl p-6 hover:bg-white/10 transition-all duration-300 text-center">
                        <div className="text-4xl mb-4">⚡</div>
                        <h3 className="text-xl font-bold mb-3 text-green-300">Réponse Rapide</h3>
                        <p className="text-gray-400 leading-7">
                            Temps de réponse moyen inférieur à 24 heures.
                        </p>
                    </div>

                    <div className="rounded-3xl border border-green-500/10 bg-white/5 backdrop-blur-xl p-6 hover:bg-white/10 transition-all duration-300 text-center">
                        <div className="text-4xl mb-4">🛡️</div>
                        <h3 className="text-xl font-bold mb-3 text-green-300">Support Sécurisé</h3>
                        <p className="text-gray-400 leading-7">
                            Vos échanges sont protégés et confidentiels.
                        </p>
                    </div>

                </div>

                {/* FAQ Sections */}
                <div className="space-y-8">

                    {faqs.map((faq, index) => (
                        <div
                            key={index}
                            className="group relative overflow-hidden rounded-[30px] border border-green-500/10 bg-white/5 backdrop-blur-xl p-10 hover:border-green-400/30 hover:bg-white/10 transition-all duration-500"
                        >

                            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-r from-green-500/5 to-emerald-500/5"></div>

                            <div className="relative z-10">

                                <div className="flex items-center gap-5 mb-6">
                                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-r from-green-500 to-emerald-400 flex items-center justify-center text-2xl shadow-lg shadow-green-500/20">
                                        {faq.icon}
                                    </div>

                                    <h2 className="text-3xl font-bold text-green-300">
                                        {faq.title}
                                    </h2>
                                </div>

                                <p className="text-gray-300 leading-9 text-lg">
                                    {faq.content}
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
                            Vous n'avez pas trouvé de réponse à votre question ? Notre équipe
                            est disponible pour vous accompagner directement depuis
                            l'application AM STORE.
                        </p>

                        <div className="flex flex-wrap justify-center gap-4 mb-8">

                            <div className="px-5 py-3 rounded-full bg-green-500/10 border border-green-500/20 text-green-300">
                                Support 24/7
                            </div>

                            <div className="px-5 py-3 rounded-full bg-green-500/10 border border-green-500/20 text-green-300">
                                Réponse Rapide
                            </div>

                            <div className="px-5 py-3 rounded-full bg-green-500/10 border border-green-500/20 text-green-300">
                                Équipe Dédiée
                            </div>

                        </div>

                        <div className="flex flex-wrap justify-center gap-4 mb-10">
                            <a
                                href="/privacy"
                                className="px-6 py-3 rounded-full bg-white/5 border border-green-500/20 text-gray-300 hover:text-green-300 hover:border-green-400/40 transition-all duration-300"
                            >
                                Politique de confidentialité
                            </a>
                        </div>

                        <div className="text-gray-500 text-sm">
                            © 2026 AM STORE. All rights reserved.
                        </div>

                    </div>

                </div>

            </div>
        </main>
    );
}
