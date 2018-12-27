import React from "react";
import { Link } from "react-router-dom";

const NotFoundPage = () => (
    <div>
        404! These are not the droids you're looking for... <Link to="/">Go Home</Link>
    </div>
);
export default NotFoundPage;