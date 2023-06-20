    <% if(users.length==0) { %>
        <p>No hay usuarios</p>
        <% } %>
            <% users.map(user=> { %>
                <div class="contacto">
                    <span>
                        <%= user.name%>
                    </span>
                    <span>
                        <%= user.age%>
                    </span>
                    <span>
                        <%= user.email%>
                    </span>
                    <span><a href="/delete/<%=user._id%>">X</a></span>
                </div>

                <% }) %>