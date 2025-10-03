"use client";

import { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";

interface Person {
    id: string;
    first: string;
    last: string;
}

export default function HomePage() {
    const router = useRouter();
    const searchParams = useSearchParams();

    const initialQuery = searchParams.get("query") || "";
    const [input, setInput] = useState(initialQuery);
    const [results, setResults] = useState<Person[]>([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        if (!input) {
            setResults([]);
            router.replace("?");
            return;
        }

        const controller = new AbortController();
        const delay = setTimeout(() => {
            router.replace(`?query=${encodeURIComponent(input)}`);

            setLoading(true);
            fetch(`/api/search?query=${encodeURIComponent(input)}`, {
                signal: controller.signal,
            })
                .then(res => res.json())
                .then(data => setResults(data.results))
                .catch(err => {
                    if (err.name !== "AbortError") {
                        console.error(err);
                    }
                })
                .finally(() => setLoading(false));
        }, 500);

        return () => {
            controller.abort();
            clearTimeout(delay);
        };
    }, [input, router]);

    return (
        <div style={{ maxWidth: 500, margin: "50px auto", fontFamily: "sans-serif" }}>
            <h1>Поиск</h1>
            <input
                type="text"
                placeholder="Введите имя или ID ..."
                value={input}
                onChange={e => setInput(e.target.value)}
                style={{ width: "100%", padding: "8px" }}
            />
            <div style={{ marginTop: "10px" }}>
            {loading && <div className="spinner" />}

            {!loading && results.length > 0 && (
                <>
                <p style={{marginBottom: "10px"}}>Найдено: {results.length}</p>
                <hr />
                <ul style={{padding: "10px 20px"}}>
                    {results.map((p) => (
                        <li key={p.id}>
                            <strong>{p.first} {p.last}</strong> — <code>{p.id}</code>
                        </li>
                    ))}
                </ul>
                </>
            )}

            {!loading && input && results.length === 0 && (
                <p>Нет данных</p>
            )}
            </div>
        </div>
    );
}
