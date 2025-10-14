import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Header } from '@/components/layout/Header';
import { ArrowRight, Bot, ShieldCheck, Video } from 'lucide-react';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <section className="container mx-auto px-4 py-16 text-center">
          <div className="mx-auto max-w-3xl">
            <h1 className="text-4xl font-bold tracking-tight text-primary sm:text-5xl md:text-6xl font-headline">
              Welcome to SecureExam Pro
            </h1>
            <p className="mt-6 text-lg leading-8 text-foreground/80">
              An advanced online examination platform with AI-powered proctoring to ensure integrity and fairness.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Button asChild size="lg">
                <Link href="/exam">
                  Start Your Secure Exam <ArrowRight className="ml-2" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        <section className="container mx-auto px-4 pb-24">
          <Card className="bg-card/50">
            <CardHeader>
              <CardTitle className="text-center text-2xl font-semibold text-primary font-headline">
                How It Works
              </CardTitle>
              <CardDescription className="text-center">
                Our platform uses state-of-the-art technology to provide a seamless and secure testing experience.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-8 md:grid-cols-3">
                <div className="flex flex-col items-center text-center">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <ShieldCheck className="h-6 w-6" />
                  </div>
                  <h3 className="text-lg font-semibold">Secure Environment</h3>
                  <p className="mt-2 text-sm text-muted-foreground">
                    Your exam session is locked and monitored to prevent unauthorized activities.
                  </p>
                </div>
                <div className="flex flex-col items-center text-center">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <Video className="h-6 w-6" />
                  </div>
                  <h3 className="text-lg font-semibold">Live Proctoring</h3>
                  <p className="mt-2 text-sm text-muted-foreground">
                    Your camera and microphone are used to monitor the exam session for any irregularities.
                  </p>
                </div>
                <div className="flex flex-col items-center text-center">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <Bot className="h-6 w-6" />
                  </div>
                  <h3 className="text-lg font-semibold">AI-Powered Analysis</h3>
                  <p className="mt-2 text-sm text-muted-foreground">
                    Our AI analyzes the recording for suspicious behavior and provides a detailed report.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>
      </main>
    </>
  );
}
