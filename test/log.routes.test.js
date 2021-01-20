import mongoose from "mongoose";
import request from "supertest";
import app from "../src/app";
import "../src/database";

describe("Log Endpoints", () => {
  it("should get all Logs", async done => {
    const res = await request(app).get("/api/v1.0/logs/all");

    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty("status");
    done();
  });

  it("should create a new Log component", async done => {
    const res = await request(app).post("/api/v1.0/logs/new").send({
      class: "app",
      time: 1611118810.802,
      duration: 300,
      applicationName: "explorer",
      action: "Desktop",
      student: "jjgahona",
      component: "GTPR01"
    });

    expect(res.statusCode).toEqual(201);
    expect(res.body).toHaveProperty("data");
    done();
  });

  it("should delete all logs", async done => {
    const res = await request(app).delete("/api/v1.0/logs/all");

    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty("status");
    done();
  });

  it("Close all connections", async done => {
    await mongoose.connection.close();
    done();
  });
});
