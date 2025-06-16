import { Mail, Github, Linkedin } from "lucide-react";

export default function PortfolioPage() {
    return (
        <div className="min-h-screen bg-gray-100 p-6 md:p-12">
            <div className="max-w-4xl mx-auto grid gap-8">
                {/* Header */}
                <header className="text-center">
                    <h1 className="text-4xl font-bold mb-2">Hi, I'm Anand Kumar</h1>
                    <p className="text-lg text-gray-700">
                        Java Backend Developer | Spring Boot | AWS | Docker | Kubernetes
                    </p>
                    <div className="mt-4 flex justify-center gap-12">
                        <a href="mailto:anand007official@gmail.com" className="button-outline">
                            <Mail className="w-4 h-4 mr-2" /> Email
                        </a>
                        <a
                            href="https://github.com/anand007s"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="button-outline"
                        >
                            <Github className="w-4 h-4 mr-2" /> GitHub
                        </a>
                        <a
                            href="https://linkedin.com/in/realanand"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="button-outline"
                        >
                            <Linkedin className="w-4 h-4 mr-2" /> LinkedIn
                        </a>
                    </div>
                </header>

                {/* About Me */}
                <Section title="About Me">
                    <p>
                        I’m a backend developer with expertise in building scalable, secure,
                        and high-performance APIs and microservices. I specialize in Java,
                        Spring Boot, and cloud-native development using AWS, Docker, and
                        Kubernetes. I help startups and businesses deploy robust backend systems
                        and microservice architectures.
                    </p>
                    <p className="mt-2">
                        I believe in continuous learning and improvement. I'm constantly
                        exploring better tools, patterns, and practices to deliver more
                        value.
                    </p>
                </Section>

                {/* Services */}
                <Section title="What I Can Do for You">
                    <ul className="list-disc ml-6 text-gray-700 space-y-2">
                        <li>Build REST APIs using Java + Spring Boot</li>
                        <li>Deploy cloud-native apps using AWS (EC2, Lambda, RDS, S3)</li>
                        <li>Containerize and orchestrate using Docker & Kubernetes</li>
                        <li>Refactor monoliths into microservices</li>
                        <li>CI/CD setup and DevOps automation</li>
                        <li>Database design and optimization (MySQL, PostgreSQL)</li>
                        <li>Monitoring & Logging setup (CloudWatch, ELK stack)</li>
                        <li>Backend system audits & performance tuning</li>
                    </ul>
                </Section>

                {/* Projects */}
                <Section title="Featured Projects">
                    <Project
                        name="API Gateway with Spring Cloud & AWS"
                        link="https://github.com/yourgithub/apigateway"
                        description="A microservices gateway with authentication, rate limiting, and logging."
                    />
                    <Project
                        name="Task Management App (Docker + Kubernetes)"
                        link="https://github.com/yourgithub/task-app"
                        description="Scalable backend with microservices architecture, deployed on AWS EKS."
                    />
                </Section>

                {/* Testimonials */}
                <Section title="Client Testimonials">
                    <p className="italic text-gray-700">
                        "Anand helped us modernize our backend systems to a
                        microservices-based architecture. We were impressed with the
                        quality, speed, and communication. Highly recommend!" — <a
                        href="https://www.linkedin.com/in/uttamkumar939/"
                        target="_blank"
                        className="text-blue-600 underline"
                    >
                        Uttam Kumar
                    </a>
                    </p>
                </Section>

                {/* Blog */}
                <Section title="Blog & Learnings">
                    <p>
                        I document my learning journey and backend best practices on my
                        blog. Topics include AWS Lambda patterns, Spring Boot optimizations,
                        CI/CD tips, and Docker security.
                    </p>
                    <p className="mt-2">
                        Blog:{" "}
                        <a
                            href="https://yourblog.com"
                            target="_blank"
                            className="text-blue-600 underline"
                        >
                            yourblog.com
                        </a>
                    </p>
                </Section>

                {/* Contact */}
                <section className="bg-white p-6 rounded-2xl shadow-md text-center">
                    <h2 className="text-2xl font-semibold mb-2">Let's Work Together</h2>
                    <p className="text-gray-700 mb-4">
                        Whether you need help with backend systems, AWS setup, or want to
                        build something from scratch — I'm open to freelance and remote
                        work.
                    </p>
                    <a
                        href="mailto:anand007official@gmail.com"
                        className="inline-block bg-blue-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-blue-700"
                    >
                        Get in Touch
                    </a>
                </section>
            </div>
        </div>
    );
}

// Reusable Section component
function Section({ title, children }) {
    return (
        <section className="bg-white p-6 rounded-2xl shadow-md">
            <h2 className="text-2xl font-semibold mb-4">{title}</h2>
            <div className="text-gray-700">{children}</div>
        </section>
    );
}

// Reusable Project block
function Project({ name, link, description }) {
    return (
        <div className="mb-4">
            <strong>{name}</strong>
            <p className="text-gray-600">
                {description}
                <br />
                GitHub:{" "}
                <a href={link} target="_blank" className="text-blue-600 underline">
                    Link
                </a>
            </p>
        </div>
    );
}
