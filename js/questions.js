const questions = [
    {
        id: 1,
        question: "ما هو الناتج النهائي لهذا الكود: <code>let x = 5; x += 3; console.log(x);</code>",
        options: ["5", "8", "3", "NaN"],
        correctAnswer: 1
    },
    {
        id: 2,
        question: "أي من هذه الدوال تُستخدم لإضافة عنصر إلى نهاية مصفوفة في JavaScript؟",
        options: ["push()", "pop()", "shift()", "unshift()"],
        correctAnswer: 0
    },
    {
        id: 3,
        question: "ما هو الناتج لهذا الكود: <code>console.log(typeof null);</code>",
        options: ["object", "null", "undefined", "number"],
        correctAnswer: 0
    },
    {
        id: 4,
        question: "أي من هذه العبارات تُستخدم لإنشاء كائن في JavaScript؟",
        options: ["const obj = new Object();", "const obj = {};", "كلاهما صحيح", "كلاهما خطأ"],
        correctAnswer: 2
    },
    {
        id: 5,
        question: "ما هو الناتج لهذا الكود: <code>console.log(2 + '2');</code>",
        options: ["4", "22", "NaN", "Error"],
        correctAnswer: 1
    },
    {
        id: 6,
        question: "أي من هذه الدوال تُستخدم لإزالة العنصر الأخير من مصفوفة؟",
        options: ["pop()", "push()", "shift()", "splice()"],
        correctAnswer: 0
    },
    {
        id: 7,
        question: "ما هو الناتج لهذا الكود: <code>let a = 10; let b = a++; console.log(b);</code>",
        options: ["10", "11", "9", "undefined"],
        correctAnswer: 0
    },
    {
        id: 8,
        question: "أي من هذه الدوال تُستخدم لإرجاع طول مصفوفة؟",
        options: ["length()", "size()", "length", "count()"],
        correctAnswer: 2
    },
    {
        id: 9,
        question: "ما هو الناتج لهذا الكود: <code>console.log(0 == false);</code>",
        options: ["true", "false", "Error", "undefined"],
        correctAnswer: 0
    },
    {
        id: 10,
        question: "أي من هذه العبارات تُستخدم لإنشاء دالة في JavaScript؟",
        options: ["function myFunc() {}", "const myFunc = function() {}", "كلاهما صحيح", "كلاهما خطأ"],
        correctAnswer: 2
    },
    {
        id: 11,
        question: "ما هو الناتج لهذا الكود: <code>console.log('5' - 3);</code>",
        options: ["2", "53", "NaN", "Error"],
        correctAnswer: 0
    },
    {
        id: 12,
        question: "أي من هذه الدوال تُستخدم لإرجاع عنصر من مصفوفة بناءً على الفهرس؟",
        options: ["get()", "index()", "find()", "at()"],
        correctAnswer: 3
    },
    {
        id: 13,
        question: "ما هو الناتج لهذا الكود: <code>console.log([] == ![]);</code>",
        options: ["true", "false", "Error", "undefined"],
        correctAnswer: 0
    },
    {
        id: 14,
        question: "أي من هذه الدوال تُستخدم لإنشاء طلب HTTP في JavaScript؟",
        options: ["fetch()", "XMLHttpRequest", "axios", "كل الإجابات صحيحة"],
        correctAnswer: 3
    },
    {
        id: 15,
        question: "ما هو الناتج لهذا الكود: <code>console.log(+'5' + +'2');</code>",
        options: ["7", "52", "NaN", "Error"],
        correctAnswer: 0
    },
    {
        id: 16,
        question: "أي من هذه الدوال تُستخدم لإرجاع نسخة من مصفوفة بدون العنصر الأول؟",
        options: ["slice(1)", "splice(0, 1)", "shift()", "pop()"],
        correctAnswer: 0
    },
    {
        id: 17,
        question: "ما هو الناتج لهذا الكود: <code>console.log(!!'hello');</code>",
        options: ["true", "false", "hello", "Error"],
        correctAnswer: 0
    },
    {
        id: 18,
        question: "أي من هذه الدوال تُستخدم لإرجاع عنصر من مصفوفة بناءً على شرط؟",
        options: ["find()", "filter()", "map()", "reduce()"],
        correctAnswer: 0
    },
    {
        id: 19,
        question: "ما هو الناتج لهذا الكود: <code>console.log(3 + 4 + '5');</code>",
        options: ["75", "12", "345", "NaN"],
        correctAnswer: 0
    },
    {
        id: 20,
        question: "أي من هذه الدوال تُستخدم لإنشاء كائن تاريخ في JavaScript؟",
        options: ["new Date()", "Date.now()", "Date()", "كل الإجابات صحيحة"],
        correctAnswer: 3
    },
    {
        id: 21,
        question: "ما هو الناتج لهذا الكود: <code>console.log(0 === false);</code>",
        options: ["true", "false", "Error", "undefined"],
        correctAnswer: 1
    },
    {
        id: 22,
        question: "أي من هذه الدوال تُستخدم لإرجاع مصفوفة جديدة بعد تطبيق دالة على كل عنصر؟",
        options: ["map()", "filter()", "reduce()", "forEach()"],
        correctAnswer: 0
    },
    {
        id: 23,
        question: "ما هو الناتج لهذا الكود: <code>console.log(typeof NaN);</code>",
        options: ["number", "NaN", "undefined", "object"],
        correctAnswer: 0
    },
    {
        id: 24,
        question: "أي من هذه الدوال تُستخدم لإرجاع مصفوفة جديدة تحتوي على العناصر التي تحقق شرط؟",
        options: ["filter()", "find()", "some()", "every()"],
        correctAnswer: 0
    },
    {
        id: 25,
        question: "ما هو الناتج لهذا الكود: <code>console.log([] + []);</code>",
        options: ["[]", "0", "''", "Error"],
        correctAnswer: 2
    },
    {
        id: 26,
        question: "أي من هذه الدوال تُستخدم لإرجاع قيمة أول عنصر في مصفوفة؟",
        options: ["head()", "first()", "find()", "at(0)"],
        correctAnswer: 3
    },
    {
        id: 27,
        question: "ما هو الناتج لهذا الكود: <code>console.log(+'hello');</code>",
        options: ["NaN", "0", "hello", "Error"],
        correctAnswer: 0
    },
    {
        id: 28,
        question: "أي من هذه الدوال تُستخدم لإرجاع مصفوفة جديدة بعد دمج مصفوفتين؟",
        options: ["concat()", "join()", "merge()", "combine()"],
        correctAnswer: 0
    },
    {
        id: 29,
        question: "ما هو الناتج لهذا الكود: <code>console.log(!!0);</code>",
        options: ["true", "false", "0", "undefined"],
        correctAnswer: 1
    },
    {
        id: 30,
        question: "أي من هذه الدوال تُستخدم لإرجاع مصفوفة جديدة بعد إزالة العناصر المكررة؟",
        options: ["unique()", "distinct()", "filter()", "Set()"],
        correctAnswer: 3
    },
    {
        id: 31,
        question: "ما هو الناتج لهذا الكود: <code>console.log(1 < 2 < 3);</code>",
        options: ["true", "false", "Error", "undefined"],
        correctAnswer: 0
    },
    {
        id: 32,
        question: "أي من هذه الدوال تُستخدم لإرجاع مصفوفة جديدة بعد فرز العناصر؟",
        options: ["sort()", "order()", "arrange()", "filter()"],
        correctAnswer: 0
    },
    {
        id: 33,
        question: "ما هو الناتج لهذا الكود: <code>console.log(2 ** 3);</code>",
        options: ["6", "8", "9", "Error"],
        correctAnswer: 1
    },
    {
        id: 34,
        question: "أي من هذه الدوال تُستخدم لإرجاع مصفوفة جديدة بعد عكس ترتيب العناصر؟",
        options: ["reverse()", "invert()", "flip()", "backwards()"],
        correctAnswer: 0
    },
    {
        id: 35,
        question: "ما هو الناتج لهذا الكود: <code>console.log('5' + 3 + 2);</code>",
        options: ["532", "10", "NaN", "Error"],
        correctAnswer: 0
    },
    {
        id: 36,
        question: "أي من هذه الدوال تُستخدم لإرجاع قيمة أول عنصر في مصفوفة بعد إزالة العنصر الأول؟",
        options: ["shift()", "pop()", "splice()", "slice(1)"],
        correctAnswer: 0
    },
    {
        id: 37,
        question: "ما هو الناتج لهذا الكود: <code>console.log(5 > '3');</code>",
        options: ["true", "false", "Error", "undefined"],
        correctAnswer: 0
    },
    {
        id: 38,
        question: "أي من هذه الدوال تُستخدم لإرجاع مصفوفة جديدة بعد تكرار عناصرها؟",
        options: ["repeat()", "clone()", "Array()", "fill()"],
        correctAnswer: 3
    },
    {
        id: 39,
        question: "ما هو الناتج لهذا الكود: <code>console.log([] == []);</code>",
        options: ["true", "false", "Error", "undefined"],
        correctAnswer: 1
    },
    {
        id: 40,
        question: "أي من هذه الدوال تُستخدم لإرجاع مصفوفة جديدة بعد تقسيم سلسلة نصية؟",
        options: ["split()", "slice()", "substring()", "substr()"],
        correctAnswer: 0
    },
    {
        id: 41,
        question: "ما هو الناتج لهذا الكود: <code>console.log(+'10' - 5);</code>",
        options: ["5", "105", "NaN", "Error"],
        correctAnswer: 0
    },
    {
        id: 42,
        question: "أي من هذه الدوال تُستخدم لإرجاع مصفوفة جديدة بعد إزالة عنصر بناءً على الفهرس؟",
        options: ["splice()", "slice()", "remove()", "delete()"],
        correctAnswer: 0
    },
    {
        id: 43,
        question: "ما هو الناتج لهذا الكود: <code>console.log(0 || 'hello');</code>",
        options: ["0", "hello", "false", "Error"],
        correctAnswer: 1
    },
    {
        id: 44,
        question: "أي من هذه الدوال تُستخدم لإرجاع مصفوفة جديدة بعد تكرار عنصر معين؟",
        options: ["fill()", "repeat()", "clone()", "copy()"],
        correctAnswer: 0
    },
    {
        id: 45,
        question: "ما هو الناتج لهذا الكود: <code>console.log(1 && 'hello');</code>",
        options: ["1", "hello", "true", "Error"],
        correctAnswer: 1
    },
    {
        id: 46,
        question: "أي من هذه الدوال تُستخدم لإرجاع مصفوفة جديدة بعد دمج عناصرها في سلسلة نصية؟",
        options: ["join()", "concat()", "merge()", "combine()"],
        correctAnswer: 0
    },
    {
        id: 47,
        question: "ما هو الناتج لهذا الكود: <code>console.log(!![]);</code>",
        options: ["true", "false", "[]", "Error"],
        correctAnswer: 0
    },
    {
        id: 48,
        question: "أي من هذه الدوال تُستخدم لإرجاع مصفوفة جديدة بعد إزالة جميع العناصر؟",
        options: ["clear()", "empty()", "splice()", "Array()"],
        correctAnswer: 1
    },
    {
        id: 49,
        question: "ما هو الناتج لهذا الكود: <code>console.log(+'5px');</code>",
        options: ["5", "NaN", "0", "Error"],
        correctAnswer: 1
    },
    {
        id: 50,
        question: "أي من هذه الدوال تُستخدم لإرجاع مصفوفة جديدة بعد إزالة العنصر الأخير؟",
        options: ["pop()", "push()", "shift()", "splice()"],
        correctAnswer: 0
    }
];