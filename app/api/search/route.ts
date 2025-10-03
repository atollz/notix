import { NextResponse } from "next/server";

const people = [
    { id: "123456", first: "John", last: "Doe" },
    { id: "234567", first: "Jane", last: "Smith" },
    { id: "345678", first: "Michael", last: "Johnson" },
    { id: "456789", first: "Emily", last: "Davis" },
    { id: "567890", first: "William", last: "Brown" },
    { id: "678901", first: "Olivia", last: "Taylor" },
    { id: "789012", first: "James", last: "Anderson" },
    { id: "890123", first: "Sophia", last: "Thomas" },
    { id: "901234", first: "Daniel", last: "Moore" },
    { id: "112233", first: "Isabella", last: "Martin" },
    { id: "223344", first: "David", last: "Clark" },
    { id: "334455", first: "Emma", last: "Rodriguez" },
    { id: "445566", first: "Alexander", last: "Lewis" },
    { id: "556677", first: "Mia", last: "Walker" },
    { id: "667788", first: "Ethan", last: "Hall" },
    { id: "778899", first: "Charlotte", last: "Allen" },
    { id: "889900", first: "Matthew", last: "Young" },
    { id: "990011", first: "Amelia", last: "Hernandez" },
    { id: "111222", first: "Benjamin", last: "King" },
    { id: "222333", first: "Harper", last: "Wright" },
];

export async function GET(req: Request) {
    const { searchParams } = new URL(req.url);
    const query = searchParams.get("query")?.toLowerCase() || "";

    // имитация задержки
    await new Promise(r => setTimeout(r, 500));

    const results = query
        ? people.filter(
            p =>
                p.first.toLowerCase().includes(query) ||
                p.last.toLowerCase().includes(query) ||
                p.id.includes(query)
        )
        : [];

    return NextResponse.json({
        query,
        results,
    });
}
