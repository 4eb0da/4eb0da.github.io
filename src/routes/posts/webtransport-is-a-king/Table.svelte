<div class="scroll">
    <table>
        <thead>
            <tr>
                <th>
                    АПИ
                </th>
                <th>
                    Назначение
                </th>
                <th>
                    Порядок данных
                </th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>
                    Поллинг
                </td>
                <td>
                    Браузер-Сервер
                </td>
                <td>
                    Гарантированный
                </td>
            </tr>
            <tr>
                <td>
                    WebSocket
                </td>
                <td>
                    Браузер-Сервер
                </td>
                <td>
                    Гарантированный
                </td>
            </tr>
            <tr>
                <td>
                    WebRTC Data Channel
                </td>
                <td>
                    Браузер-Браузер, Браузер-Сервер*
                </td>
                <td>
                    Гарантированный + Негарантированный
                </td>
            </tr>
            <tr>
                <td>
                    WebTransport
                </td>
                <td>
                    Браузер-Сервер
                </td>
                <td>
                    Гарантированный + Негарантированный
                </td>
            </tr>
        </tbody>
    </table>
</div>

<style>
    .scroll {
        width: fit-content;
        max-width: 100%;
        overflow-x: auto;
    }

    table {
        border-collapse: collapse;
    }

    th, td {
        padding: 4px 8px;
        border: 1px solid;
    }
</style>
