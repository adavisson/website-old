# # stage: 1
# FROM node:8 as react-build
# WORKDIR /app
# COPY . ./
# RUN yarn
# RUN yarn build

# # stage: 2 — the production environment
# FROM nginx:alpine
# COPY — from=react-build /app/build/ /usr/share/nginx/html/
# EXPOSE 80
# CMD [“nginx”, “-g”, “daemon off;”]

FROM mhart/alpine-node:11 AS builder
WORKDIR /app
COPY . .
RUN yarn
RUN yarn build

FROM mhart/alpine-node
RUN yarn global add serve
WORKDIR /app
COPY --from=builder /app/build .
CMD ["serve", "-p", "443", "-s", "."]
